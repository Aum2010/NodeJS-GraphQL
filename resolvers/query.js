import ByShema from '../schema/models/models'

const Query = {
    //me: (parent , args , context , info) => me ,
    user: (parent , args , context , info) => {
        const id = args.id
        const user = users.find( u => u.id === id )

        return user
    },
    users: (parent , args , context , info) => {
        return ByShema.find()
    } 
}

export default Query