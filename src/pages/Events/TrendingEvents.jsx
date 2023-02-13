import Button from "@/src/components/General/Button";
import Typography from "@/src/components/General/Typography";
import Col from "@/src/components/Layout/Col";
import Row from "@/src/components/Layout/Row";
import React from "react";

const TrendingEvents = () => {
  return (
    <Col styles="bg-primary p-4 pt-32 text-white rounded-xl gap-4">
      <Typography>Upcoming event</Typography>
      <Typography variant="text-7xl font-bold">Youthopia 2023</Typography>
      <Row>
        <Button variant="text-primary bg-white">Book Now</Button>
      </Row>
    </Col>
  );
};

export default TrendingEvents;
