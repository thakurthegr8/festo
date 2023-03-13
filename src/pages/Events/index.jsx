import React from "react";
import Col from "@/src/components/Layout/Col";
import Container from "@/src/components/Layout/Container";
import Navbar from "@/src/sections/Navbar";
import EventsByCategories from "./EventsByCategories";
import Page from "@/src/sections/Page";

const EventGallery = (props) => {
  return (
    <>
      {props.events.map((item, index) => (
        <EventsByCategories
          title={item.title}
          events={item.events}
          key={index}
        />
      ))}
    </>
  );
};

const Events = (props) => {
  return (
    <Page title="Events">
      <Col>
        <Container styles="max-w-5xl px-4 md:px-0">
          <Navbar />
        </Container>
        <Container styles="max-w-5xl">
          <Col styles="gap-0 md:gap-8 pb-2">
            <EventGallery events={props.events} />
          </Col>
        </Container>
      </Col>
    </Page>
  );
};

export default Events;
