// import { gql } from 'apollo-server-express'

// import bcrypt from 'bcrypt'
import Mutation from './mutation'
import Query from './query'
// //mock database 
// const users = [
//     {
//         id : "1",
//         name : "Dev"
//     },
//     {
//         id : "2",
//         name : "Dev"
//     },
//     {
//         id : '3',
//         name : 'Dev'
//     },
//     {
//         id : '4',
//         name : 'Dev'
//     },
// ] 

// const me = users[0]



const resolvers = {
    Query ,
    Mutation

    
}

export default resolvers