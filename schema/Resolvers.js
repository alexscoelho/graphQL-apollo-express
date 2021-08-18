const { country } = require("../FakeData");

const resolvers = {
  Query: {
    getAllCountries() {
      return country;
    },
  },
  Mutation: {
    createCountry(parent, args) {
      const newCountry = args;
      country.push(newCountry);
      return newCountry;
    },
  },
};

module.exports = { resolvers };
