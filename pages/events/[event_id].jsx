import withApiSession from "@/src/middlewares/withApiSession";
import withSession from "@/src/middlewares/withSession";
import Event from "@/src/pages/Events/Event";
import axios from "axios";
import React from "react";

const EventPage = (props) => {
  return <Event event={props.event} ticket={props.ticket} />;
};

export default EventPage;

EventPage.auth = true;

export const getServerSideProps = withSession(
  withApiSession(async (ctx) => {
    const { url } = ctx.req;
    console.log(ctx.req.user);
    try {
      const event = await axios.get(`${url}/api/events/${ctx.query.event_id}`);
      const ticket = await axios.post(
        `${url}/api/events/bookings/${ctx.query.event_id}`,
        {
          user: ctx.req.user,
        }
      );
      const ticketData = await ticket.data;
      const eventData = await event.data;
      if (Object.keys(eventData).length == 0) {
        return { notFound: true };
      }
      console.log(ticketData);
      return { props: { event: eventData, ticket: ticketData } };
    } catch (error) {
      console.log(error);
      return { notFound: true };
    }
  })
);
