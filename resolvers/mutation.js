import ByShema from '../schema/models/models'
import bcrypt from 'bcrypt'

const Mutation = {
    signup: async (parent , args , context , info) => {
        // return ByShema.create(args)
        //Check email already exitst in database
        const email = args.email.trim().toLowerCase()

        const curUser = await ByShema.find()
        const isEmailExist = curUser.findIndex(u => u.email === email) > -1

        if (isEmailExist) {
            throw new Error('Email already exist')
        }

        //Check Password less 6 letter
        if(args.password.trim().length < 6){
            throw new Error('Password must be at least 6 characters.')
        }
        const password = await bcrypt.hash(args.password , 10)

        return ByShema.create({ ...args , password , email })
    }
}

export default Mutation