import UserModel from "../models/userSchema.js";

export const getuser = async (req, res) => {
    try{
        const user = await UserModel.findById(req.params.id);
        res.status(200).json(user);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}