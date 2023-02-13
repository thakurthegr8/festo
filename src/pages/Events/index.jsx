import Col from "@/src/components/Layout/Col";
import Container from "@/src/components/Layout/Container";
import Navbar from "@/src/sections/Navbar";
import React from "react";

const Events = () => {
  return (
    <Col >
      <Container styles="max-w-5xl">
        <Col >
          <Navbar />
        </Col>
      </Container>
    </Col>
  );
};

export default Events;
