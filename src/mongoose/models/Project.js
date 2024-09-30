import mongoose, { Schema, model } from "mongoose";

const stringRequired = {
  type: String,
  required: true,
};

const schema = new Schema({
  title: stringRequired,
  subTitle: stringRequired,
  slug: stringRequired,
  content: stringRequired,
  thumbnailBig: stringRequired,
  thumbnailSmall: stringRequired,
  customID: stringRequired,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models?.project || model("project", schema);
