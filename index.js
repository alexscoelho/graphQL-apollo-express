const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./schema/TypeDefs");
const { resolvers } = require("./schema/Resolvers");

const express = require("express");
PORT = 3001;

// const app = express();
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// server.applyMiddleware({ app });

// app.listen({ port: 3001 }, () => {
//   console.log("Server Running on port 3001");
// });

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({ typeDefs, resolvers });
  const app = express();
  await server.start();
  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
  });
}

startApolloServer(typeDefs, resolvers);
