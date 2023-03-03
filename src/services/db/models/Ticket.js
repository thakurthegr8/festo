import mongoose, { model, Schema } from "mongoose";

const TicketSchema = new Schema(
  {
    ticket_for_user: {
      type: Schema.Types.String,
      required: true,
    },
    ticket_for_event: {
      type: Schema.Types.ObjectId,
      ref: "FestoEvent",
      required: true,
    },
  },
  { timestamps: true }
);

TicketSchema.index(
  { ticket_for_user: 1, ticket_for_event: 1 },
  { unique: true }
);

const Ticket =
  mongoose.models.FestoTicket || model("FestoTicket", TicketSchema);

export default Ticket;
