import mongoose, { model, Schema } from "mongoose";

const EventSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    time: {
      type: Schema.Types.Mixed,
      required: true,
    },
    location: {
      type: Schema.Types.String,
      required: true,
    },
    type: {
        type: Schema.Types.Mixed,
        // ref: "Group_Category",
        required: true,
      },
    group_ref: {
      type: Schema.Types.Mixed,
    //   ref: "Group",
      required: true,
    },
  },
  { timestamps: true }
);

const Event = mongoose.models.FestoEvent || model("FestoEvent", EventSchema);

export default Event;
