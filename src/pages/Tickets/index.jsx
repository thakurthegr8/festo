import React from "react";
import Col from "@/src/components/Layout/Col";
import Container from "@/src/components/Layout/Container";
import Navbar from "@/src/sections/Navbar";
import Typography from "@/src/components/General/Typography";
import Row from "@/src/components/Layout/Row";
import Image from "next/image";
import moment from "moment";
import Button from "@/src/components/General/Button";
import Link from "next/link";
import { timeStringNormalization } from "@/utils/date";

const loader = ({ src }) => src;

const initialState = { upcoming: [], old: [] };
const rearrange = (tickets) => {
  if (!tickets) return initialState;
  const getDateValue = (date) => moment(date).diff(new Date());

  const upcoming = tickets
    .filter((item) => getDateValue(item.ticket_for_event.date) > 0)
    .sort(
      (first, second) =>
        getDateValue(first.ticket_for_event.date) -
        getDateValue(second.ticket_for_event.date)
    );
  const old = tickets
    .filter((item) => getDateValue(item.ticket_for_event.date) < 0)
    .sort(
      (first, second) =>
        getDateValue(first.ticket_for_event.date) -
        getDateValue(second.ticket_for_event.date)
    );

  return { upcoming, old };
};

const TicketListItem = (props) => {
  const { ticket_for_event } = props.ticket;
  return (
    <Col styles="bg-white border rounded-md p-4">
      <Row styles="justify-between items-center flex-1">
        <Row styles="items-center gap-2">
          <Image
            src={ticket_for_event.media_url}
            width={32}
            height={32}
            alt={ticket_for_event.name}
            loader={loader}
          />
          <Col>
            <Typography variant="text-caption font-bold capitalize">
              {ticket_for_event.name.length > 16
                ? `${ticket_for_event.name.substring(0, 16)}...`
                : ticket_for_event.name}
            </Typography>
            <Row styles="gap-x-2 flex-wrap">
              <Typography variant="text-xs text-primary font-bold">
                {moment(ticket_for_event.date).format("LL")}
              </Typography>
              <Typography variant="text-xs text-primary font-bold">
                {timeStringNormalization(ticket_for_event.time)}
              </Typography>
            </Row>
          </Col>
        </Row>
        <Link
          href={`/tickets/${props.ticket._id}`}
          className="btn-sm  btn-text  text-primary"
        >
          View Ticket
        </Link>
      </Row>
    </Col>
  );
};

const Tickets = (props) => {
  const tickets = rearrange(props.tickets);

  return (
    <Col>
      <Container styles="max-w-5xl">
        <Navbar />
      </Container>
      <Container styles="max-w-md">
        <Col styles="gap-2 py-8">
          <Typography variant="text-title font-black">
            Upcoming Events
          </Typography>
          {tickets.upcoming.length !== 0 ? (
              tickets.upcoming.map((item, index) => (
                <TicketListItem ticket={item} key={index} />
              ))
            ) : (
              <Typography>No events</Typography>
            )}
          <Col styles="gap-8 pb-8">
            <Typography variant="text-title font-black">Old Events</Typography>
            {tickets.old.length !== 0 ? (
              tickets.old.map((item, index) => (
                <TicketListItem ticket={item} key={index} />
              ))
            ) : (
              <Typography>No events</Typography>
            )}
          </Col>
        </Col>
      </Container>
    </Col>
  );
};

export default Tickets;
