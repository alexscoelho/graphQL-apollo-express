const { database } = require("../Firebase/config");
const { countryInfo } = require("../Firebase/countryInfo");
const fetch = require("node-fetch");

const baseURL = "https://graphql-test-7f1f8-default-rtdb.firebaseio.com";

console.log(database);

const resolvers = {
  Query: {
    getAllCountries: async () => {
      const data = await fetch(`${baseURL}/country.json`);
      const dataJson = await data.json();
      const keys = Object.keys(dataJson);
      const mapsKeys = keys.map(function (item) {
        const countryData = dataJson[item];
        const graphqlCountry = countryInfo(countryData);
        return graphqlCountry;
      });
      return mapsKeys;
    },
  },
  Mutation: {
    createCountry: async (parent, args) => {
      const newCountry = args;
      const data = await database.ref("country/").push(newCountry);
      return newCountry;
    },
  },
};

module.exports = { resolvers };
