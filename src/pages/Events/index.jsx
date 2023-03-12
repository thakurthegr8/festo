import React from "react";
import Col from "@/src/components/Layout/Col";
import Container from "@/src/components/Layout/Container";
import Navbar from "@/src/sections/Navbar";
import EventsByCategories from "./EventsByCategories";
import useEvents from "@/src/hooks/useEvents";
import Loader from "@/src/elements/Loader";
import Row from "@/src/components/Layout/Row";

const rearrange = (events) => {
  if (!events) return [];
  const set = new Set();
  events.forEach((item) => set.add(item.type.name));
  const setList = Array.from(set);
  const arrangedEvents = setList.map((item) => {
    const obj = { title: item, events: [] };
    obj.events = events.filter((event) => event.type.name === item);
    return obj;
  });
  console.log(arrangedEvents);
  return arrangedEvents;
};

const EventGallery = () => {
  const { events, loading } = useEvents();
  const eventsByCategories = rearrange(events);

  if (loading)
    return (
      <Row styles="w-full items-center justify-center flex-1 h-full pt-36">
        <Loader />
      </Row>
    );

  return (
    <>
      {eventsByCategories.map((item, index) => (
        <EventsByCategories
          title={item.title}
          events={item.events}
          key={index}
        />
      ))}
    </>
  );
};

const Events = () => {
  return (
    <Col>
      <Container styles="max-w-5xl px-4 md:px-0">
        <Navbar />
      </Container>
      <Container styles="max-w-5xl">
        <Col styles="gap-0 md:gap-8 pb-2">
          {/* <TrendingEvents /> */}
          <EventGallery />
        </Col>
      </Container>
    </Col>
  );
};

export default Events;
