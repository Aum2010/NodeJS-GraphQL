const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema');
import express from 'express'
const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4444

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4444${server.graphqlPath}`)
)