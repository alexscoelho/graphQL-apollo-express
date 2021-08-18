const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./schema/TypeDefs");
const { resolvers } = require("./schema/Resolvers");
const { firebaseClient } = require("./Firebase/config");

const express = require("express");
PORT = 3001;

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      return {
        headers: req.headers,
        firebaseClient,
      };
    },
  });

  const app = express();
  await server.start();
  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
  });
}

startApolloServer(typeDefs, resolvers);
