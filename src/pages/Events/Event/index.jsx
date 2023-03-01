import Col from "@/src/components/Layout/Col";
import Container from "@/src/components/Layout/Container";
import Navbar from "@/src/sections/Navbar";
import React from "react";
import EventDetails from "./EventDetails";
import SimilarEvents from "./SimilarEvents";

const Event = (props) => {
  return (
    <Col>
      <Container styles="max-w-5xl">
        <Col styles="gap-8">
          <Navbar />
          <EventDetails event={props.event} />
          <SimilarEvents />
        </Col>
      </Container>
    </Col>
  );
};

export default Event;
