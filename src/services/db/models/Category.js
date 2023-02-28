import mongoose, { model, Schema } from "mongoose";

const CategorySchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Category =
  mongoose.models.FestoCategory || model("FestoCategory", CategorySchema);

export default Category;
