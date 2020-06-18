const { ApolloServer } = require('apollo-server-express');
// const { typeDefs } = require('./schema/typedef');
// const { resolvers } = require('./resolvers/resolvers');


import { resolvers } from '../resolvers/resolvers'
// import { typeDefs } from "../schema/typedef" <-- Old Version with ../schema/typedef.js
import path from 'path'
import fs from 'fs'
const typeDefs = fs.readFileSync(path.join(__dirname ,'../schema' , 'schema.graphql') ,"utf-8").toString()
//console.log(path.join(__dirname ,'../schema' , 'schema.graphql'))
const server = new ApolloServer({
  typeDefs,
  resolvers,
});



export default server

