import mongoose, { model, Schema } from "mongoose";

const GroupSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    created_by: {
      type: Schema.Types.String,
      required: true,
    },
    category: {
      type: Schema.Types.String,
      required: true,
    },
  },
  { timestamps: true }
);

const Group = mongoose.models.FestoGroup || model("FestoGroup", GroupSchema);

export default Group;
