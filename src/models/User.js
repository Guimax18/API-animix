import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    email: {type: String, required: true },
    senha: {type: String, required:true},

}, { versionKey: false });

const user = mongoose.model("user", UserSchema);

export default user;