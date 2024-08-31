import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
    },
},
    {
        timestamps: true
    } 
)

const UserModel = mongoose.model("UserModel", userSchema)

export default UserModel

