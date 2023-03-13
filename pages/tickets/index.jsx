import React from "react";
import Tickets from "@/src/pages/Tickets";
import withSession from "@/src/middlewares/withSession";
import withApiSession from "@/src/middlewares/withApiSession";
import axios from "axios";

const TicketsPage = (props) => {
  return <Tickets tickets={props.tickets} />;
};

export default TicketsPage;

TicketsPage.auth = false;

export const getServerSideProps = withSession(
  withApiSession(async (ctx) => {
    const { url } = ctx.req;
    console.log(ctx.req.user);
    try {
      const tickets = await axios.post(`${url}/api/tickets`, {
        user: ctx.req.user,
      });
      const ticketsData = await tickets.data;
      console.log(ticketsData);
      return { props: { tickets: ticketsData } };
    } catch (error) {
      console.log(error);
      return { notFound: true };
    }
  })
);
