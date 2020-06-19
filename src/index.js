import express from 'express'
import server from './server'
import mongoose from 'mongoose'
const app = express()

import dotenv from 'dotenv'
dotenv.config( )
// const DB_USER = "Aumaumone2009"
// const DB_PASS = "Aum0879862267"
// const DB_NAME = "NodeJsGraphQL"
// const PORT = process.env.PORT || 5000

const { DB_NAME , DB_PASS , DB_USER , PORT} = process.env

const createServer = async () => {
  try {
     console.log(DB_NAME)
     await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0-bajm1.mongodb.net/${DB_NAME}?retryWrites=true&w=majority` ,
       {
         useUnifiedTopology : true ,
       }
     )
     
     
     server.applyMiddleware({ app })
     
     
     app.listen(PORT, () => {

      console.log(`🚀 Server ready at http://localhost:${PORT} ${server.graphqlPath}`)

    }
      
     )

  } catch (error) {
    console.log(error)
  }
}

createServer ()
