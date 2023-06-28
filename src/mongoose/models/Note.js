import mongoose, { Schema, model } from "mongoose";

const stringRequired = {
  type: String,
  required: true,
};

const schema = new Schema({
  title: stringRequired,
  slug: stringRequired,
  content: stringRequired,
  customID: stringRequired,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.note || model("note", schema);
