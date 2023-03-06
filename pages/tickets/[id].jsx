import withApiSession from "@/src/middlewares/withApiSession";
import withSession from "@/src/middlewares/withSession";
import Ticket from "@/src/pages/Tickets/Ticket";
import axios from "axios";
import React from "react";

const TicketPage = (props) => {
  return <Ticket ticket={props.ticket} />;
};

export default TicketPage;

TicketPage.auth = true;

export const getServerSideProps = withSession(
  withApiSession(async (ctx) => {
    const { url } = ctx.req;
    console.log(ctx.req.user);
    try {
      const tickets = await axios.post(`${url}/api/tickets/${ctx.query.id}`, {
        user: ctx.req.user,
      });
      const ticketsData = await tickets.data;
      if (Object.keys(ticketsData).length === 0) return { notFound: true };
      console.log(ticketsData);
      return { props: { ticket: ticketsData } };
    } catch (error) {
      console.log(error);
      return { notFound: true };
    }
  })
);
