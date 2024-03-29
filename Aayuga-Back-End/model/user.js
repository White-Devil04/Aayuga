import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
   username: { type: String, required: true, unique: [true, 'Username already in use!'] },
   email: { type: String, required: true },
   password: { type: String, required: true, minLength: [4, 'Too short!'] },
   height: { type: Number, required: true },
   weight: { type: Number, required: true },
   bloodGroup: { type: String, required: true },

});

const model = mongoose.model('UserSchema', UserSchema);

export default model;