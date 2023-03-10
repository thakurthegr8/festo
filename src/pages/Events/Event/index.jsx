import Col from "@/src/components/Layout/Col";
import Container from "@/src/components/Layout/Container";
import Navbar from "@/src/sections/Navbar";
import React from "react";
import EventDetails from "./EventDetails";
import SimilarEvents from "./SimilarEvents";

const Event = (props) => {
  return (
    <Col>
      <Container styles="max-w-5xl px-4 lg:px-0">
        <Col styles="gap-8">
          <Navbar />
          <EventDetails event={props.event} ticket={props.ticket} />
          <SimilarEvents />
        </Col>
      </Container>
    </Col>
  );
};

export default Event;
