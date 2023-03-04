import React from "react";
import Events from "@/src/pages/Events";
import withApiSession from "@/src/middlewares/withApiSession";

const EventsPage = () => {
  return <Events />;
};

export default EventsPage;

EventsPage.auth = true;

