import React from "react";
import Col from "@/src/components/Layout/Col";
import Container from "@/src/components/Layout/Container";
import Navbar from "@/src/sections/Navbar";
import EventsByCategories from "./EventsByCategories";
import useEvents from "@/src/hooks/useEvents";

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

const Events = () => {
  const { events } = useEvents();
  const eventsByCategories = rearrange(events);

  return (
    <Col>
      <Container styles="max-w-5xl">
        <Col styles="gap-8 pb-8">
          <Navbar />
          {/* <TrendingEvents /> */}
          {eventsByCategories.map((item) => (
            <EventsByCategories title={item.title} events={item.events} />
          ))}
        </Col>
      </Container>
    </Col>
  );
};

export default Events;
