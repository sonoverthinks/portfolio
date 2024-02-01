import mongoose, { Schema, model } from "mongoose";

const stringRequired = {
  type: String,
  required: true,
};

const schema = new Schema({
  topic: String,
  snippet: String,
  content: stringRequired,
  customID: stringRequired,
});

export default mongoose?.models?.trivia || model("trivia", schema);
