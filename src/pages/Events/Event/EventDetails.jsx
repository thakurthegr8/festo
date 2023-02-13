import React from "react";
import Typography from "@/src/components/General/Typography";
import CalendarIcon from "@heroicons/react/20/solid/CalendarIcon";
import ClockIcon from "@heroicons/react/24/outline/ClockIcon";
import MapPinIcon from "@heroicons/react/24/outline/MapPinIcon";
import Col from "@/src/components/Layout/Col";
import Row from "@/src/components/Layout/Row";
import Button from "@/src/components/General/Button";

const EventDetails = () => {
  return (
    <Row styles="gap-4">
      <Col styles="w-2/3 h-96 bg-gray-400 rounded-lg animate-pulse"></Col>
      <Col styles="gap-4">
        <Typography variant="text-title font-black">Youthopia 2023</Typography>
        <Typography variant="text-primary">General Event</Typography>
        <Row styles="gap-8">
          <Row styles="gap-2">
            <CalendarIcon className="w-6 h-6 text-primary" />
            <Typography variant="font-bold">27 December 2023</Typography>
          </Row>
          <Row styles="gap-2">
            <ClockIcon className="w-6 h-6 text-primary" />
            <Typography variant="font-bold">9:00 PM</Typography>
          </Row>
        </Row>
        <Row styles="gap-2">
          <MapPinIcon className="w-6 h-6 text-primary" />
          <Typography variant="font-bold">Main Parking Area</Typography>
        </Row>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus. Nullam quis imperdiet augue.{" "}
        </Typography>
        <Row><Button>Book Now</Button></Row>
      </Col>
    </Row>
  );
};

export default EventDetails;
