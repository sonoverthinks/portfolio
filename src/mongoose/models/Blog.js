import mongoose, { Schema, model } from "mongoose";

const stringRequired = {
  type: String,
  required: true,
};

const schema = new Schema({
  title: stringRequired,
  slug: stringRequired,
  content: stringRequired,
  readingTime: stringRequired,
  customID: stringRequired,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  totalViews: {
    type: Number,
    default: 0,
  },
  tags: {
    type: Array,
    required: true,
  },
});

export default mongoose.models.blog || model("blog", schema);
