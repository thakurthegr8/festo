import React from "react";
import Col from "@/src/components/Layout/Col";
import Container from "@/src/components/Layout/Container";
import Navbar from "@/src/sections/Navbar";
import TrendingEvents from "./TrendingEvents";
import EventsByCategories from "./EventsByCategories";

const Events = () => {
  return (
    <Col>
      <Container styles="max-w-5xl">
        <Col styles="gap-8">
          <Navbar />
          <TrendingEvents />
          <EventsByCategories />
          <EventsByCategories />
        </Col>
      </Container>
    </Col>
  );
};

export default Events;
