import React from "react";
import EventsDashboard from "@/src/pages/Dashboard/Events";
import axios from "axios";
import withSession from "@/src/middlewares/withSession";

const DashboardEventsPage = (props) => {
  return <EventsDashboard/>;
};

export default DashboardEventsPage;

