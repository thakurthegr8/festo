import mongoose, { model, Schema } from "mongoose";

const LocationSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Location =
  mongoose.models.FestoLocation || model("FestoLocation", LocationSchema);

export default Location;
