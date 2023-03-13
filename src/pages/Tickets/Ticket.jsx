import React from "react";
import Col from "@/src/components/Layout/Col";
import Container from "@/src/components/Layout/Container";
import Navbar from "@/src/sections/Navbar";
import TicketItem from "@/src/elements/TicketItem";
import Row from "@/src/components/Layout/Row";
import Typography from "@/src/components/General/Typography";
import Image from "next/image";
import moment from "moment";
import { timeStringNormalization } from "@/utils/date";
import Grid from "@/src/components/Layout/Grid";
import QRCode from "react-qr-code";
import IconLabel from "@/src/components/DataDisplay/IconLabel";
import MapPinIcon from "@heroicons/react/24/outline/MapPinIcon";
import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
import Link from "next/link";
import { loader } from "@/utils/image";



const Ticket = (props) => {
  const { ticket_for_event: event } = props.ticket;
  const { location, type, group_ref } = event;
  return (
    <Col>
      <Container styles="max-w-5xl px-4 lg:px-0">
        <Navbar />
      </Container>
      <Container styles="max-w-md px-4 lg:px-0">
        <TicketItem>
          <Link href={`/events/${event._id}`}>
            <TicketItem.Header>
              <Col styles="gap-2">
                <Typography variant="text-xs text-right">
                  Ticket id : {props.ticket._id}
                </Typography>
                <Row styles="gap-2">
                  <Image
                    src={event.media_url}
                    width={64}
                    height={64}
                    loader={loader}
                    alt={event.name}
                  />
                  <Col>
                    <Typography variant="text-heading font-bold capitalize">
                      {event.name}
                    </Typography>
                    <Typography variant="text-xs tracking-slug font-bold text-primary uppercase">
                      {type.name}
                    </Typography>
                    <Typography variant="text-sm capitalize">
                      {moment(event.date).format("LL")}
                    </Typography>
                    <Typography variant="text-sm uppercase">
                      {timeStringNormalization(event.time)}
                    </Typography>
                  </Col>
                </Row>
              </Col>
            </TicketItem.Header>
          </Link>
          <TicketItem.Info>
            <Grid styles="grid-cols-2 gap-2 p-4 bg-white">
              <Col>
                <QRCode
                  value={`${props.ticket._id}####${props.ticket.ticket_for_user}`}
                  className="w-full h-full"
                />
              </Col>
              <Col>
                <IconLabel
                  Icon={<MapPinIcon className="w-6 h-6 text-primary" />}
                  label={
                    <Typography variant="capitalize">
                      {location.name}
                    </Typography>
                  }
                />
                <IconLabel
                  Icon={<UserGroupIcon className="w-6 h-6 text-primary" />}
                  label={
                    <Typography variant="capitalize">
                      {group_ref.name}
                    </Typography>
                  }
                />
              </Col>
            </Grid>
          </TicketItem.Info>
        </TicketItem>
      </Container>
    </Col>
  );
};

export default Ticket;
