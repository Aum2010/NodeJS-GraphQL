import express from 'express'
import server from './server'
import mongoose from 'mongoose'
const app = express()

const DB_USER = ""
const DB_PASS = ""
const DB_NAME = ""
const PORT = process.env.PORT || 5000


const createServer = async () => {
  try {
     await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0-bajm1.mongodb.net/${DB_NAME}?retryWrites=true&w=majority` ,
       {
         useUnifiedTopology : true ,
       }
     )
     
     
     server.applyMiddleware({ app })
     
     
     app.listen(5000, () => {

      console.log(`🚀 Server ready at http://localhost:5000 ${server.graphqlPath}`)

    }
      
     )

  } catch (error) {
    console.log(error)
  }
}

createServer ()
