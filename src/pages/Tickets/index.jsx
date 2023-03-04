import React from "react";
import Col from "@/src/components/Layout/Col";
import Container from "@/src/components/Layout/Container";
import Navbar from "@/src/sections/Navbar";
import Typography from "@/src/components/General/Typography";

const Tickets = (props) => {
  return (
    <Col>
      <Container styles="max-w-5xl">
        <Col styles="gap-8 pb-8">
          <Navbar />
          {props?.tickets.map((item, index) => (
            <Col key={index}>
              <Typography variant="capitalize">{item.ticket_for_event.name}</Typography>
            </Col>
          ))}
        </Col>
      </Container>
    </Col>
  );
};

export default Tickets;
