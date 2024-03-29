import mongoose from "mongoose";

const PoseSchema = new mongoose.Schema({
   title: { type: String, required: true, unique: true },
   time:{ type:Number, required: true},
   instructions: { type: Array, required: true },
   steps: { type: Array, required: true },
   imgURL:{ type: String, required: true}
});

const model  = mongoose.model("PoseSchema",PoseSchema);

export default model;