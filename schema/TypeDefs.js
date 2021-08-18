const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Country {
    name: String!
    year: String
    area: Int
    totalPopulation: Int
  }

  #Queries
  type Query {
    getAllCountries: [Country!]!
  }

  #Mutations
  type Mutation {
    createCountry(
      name: String!
      year: String
      area: Int
      totalPopulation: Int
    ): Country!
  }
`;

module.exports = { typeDefs };
