import mongoose from "mongoose";
const currentDate = new Date();
const ChatDataSchema = new mongoose.Schema({
   username: { type: String, required: true },
   question: { type: String, required: true ,unique:true},
   answer: { type: String, required: true },
   year: { type: String, required: true, default: currentDate.getFullYear().toString() },
   month: { type: String, required: true, default: (currentDate.getMonth()+1).toString() },
   date: { type: String, required: true, default: currentDate.getDate().toString() }
});

const model = mongoose.model("ChatDataSchema", ChatDataSchema);

export default model;