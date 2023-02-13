import React from "react";
import Col from "@/src/components/Layout/Col";
import Typography from "@/src/components/General/Typography";
import Row from "@/src/components/Layout/Row";

const DummyLoader = () => {
  return <Col styles="w-52 h-72 bg-gray-400 rounded-md animate-pulse"></Col>;
};

const EventsByCategories = () => {
  return (
    <Col>
      <Typography variant="text-subtitle font-bold">Tech Events</Typography>
      <Row styles="overflow-x-scroll gap-4 scroll-bar-none">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <Col key={index}>
            <DummyLoader />
            <Typography>Event A</Typography>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default EventsByCategories;
