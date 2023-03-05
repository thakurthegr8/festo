import React from "react";
import Col from "@/src/components/Layout/Col";
import Container from "@/src/components/Layout/Container";
import Navbar from "@/src/sections/Navbar";
import Typography from "@/src/components/General/Typography";
import Ticket from "@/src/elements/Ticket";
import Row from "@/src/components/Layout/Row";
import Image from "next/image";
import moment from "moment";

const loader = ({ src }) => src;


const Tickets = (props) => {

  return (
    <Col>
      <Container styles="max-w-5xl">
        <Navbar />
      </Container>
      <Container styles="max-w-md">
        <Col styles="gap-8 pb-8">
          {props?.tickets.map((item, index) => (
            <Ticket key={index}>
              <Ticket.Header>
                <Row styles=" justify-between items-center">
                  <Row styles="items-center gap-2">
                    <Image
                      src={item.ticket_for_event.media_url}
                      width={32}
                      height={32}
                      loader={loader}
                      alt={item.ticket_for_event.name}
                    />
                    <Typography variant="text-heading font-black capitalize">
                      {item.ticket_for_event.name}
                    </Typography>
                  </Row>
                  <Typography variant="text-sm text-primary font-bold">
                    {moment(item.ticket_for_event.date).format("LL")}
                  </Typography>
                </Row>
              </Ticket.Header>
            </Ticket>
          ))}
        </Col>
      </Container>
    </Col>
  );
};

export default Tickets;
