import pkg from "mongoose"
const {Schema, model} = pkg
const UserSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const user = model('User', UserSchema)

export default user
