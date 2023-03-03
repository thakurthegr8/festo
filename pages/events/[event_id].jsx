import withSession from "@/src/middlewares/withSession";
import Event from "@/src/pages/Events/Event";
import axios from "axios";
import React from "react";

const EventPage = (props) => {
  return <Event event={props.event} />;
};

export default EventPage;

EventPage.auth = true;

export const getServerSideProps = withSession(async (ctx) => {
  const { url } = ctx.req;
  try {
    const event = await axios.get(`${url}/api/events/${ctx.query.event_id}`);
    const eventData = await event.data;
    if (Object.keys(eventData).length == 0) {
      return { notFound: true };
    }
    // console.log(eventData);
    return { props: { event: eventData } };
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
});
