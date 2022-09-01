const { ApolloServer, gql } = require('apollo-server');
const {readFileSync} = require('fs');
const path = require("path");
const typeDefs = gql(readFileSync(path.resolve(__dirname, "./schema.graphql"), {encoding: 'utf-8'}));
const resolvers = require('./resolvers');
const { buildSubgraphSchema} = require("@apollo/subgraph")


const server = new ApolloServer({
 schema: buildSubgraphSchema({
   typeDefs,
   resolvers,
 })
});

server.listen({ port: 4002 }).then(({ url }) => {
  console.log(`🚀 users subgraph ready at ${url}`);
});

