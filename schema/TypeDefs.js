const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Country {
    id: String!
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
      id: String!
      name: String!
      year: String
      area: Int
      totalPopulation: Int
    ): Country!
    updateCountry(
      id: String!
      name: String!
      year: String
      area: Int
      totalPopulation: Int
    ): Country!
    deleteCountry(id: String!): Boolean
  }
`;

module.exports = { typeDefs };
