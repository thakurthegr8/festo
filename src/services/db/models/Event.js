import mongoose, { model, Schema } from "mongoose";

const EventSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    date: {
      type: Schema.Types.Date,
      required: true,
    },
    time: {
      type: Schema.Types.Mixed,
      required: true,
    },
    location: {
      type: Schema.Types.ObjectId,
      ref: "FestoLocation",
      required: true,
    },
    media_url: {
      type: Schema.Types.String,
      required: true,
    },
    type: {
      type: Schema.Types.ObjectId,
      ref: "FestoCategory",
      required: true,
    },
    group_ref: {
      type: Schema.Types.ObjectId,
      ref: "FestoGroup",
      required: true,
    },
  },
  { timestamps: true }
);

const Event = mongoose.models.FestoEvent || model("FestoEvent", EventSchema);

export default Event;
