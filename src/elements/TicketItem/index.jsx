import React from "react";
import Col from "@/src/components/Layout/Col";
import Row from "@/src/components/Layout/Row";
import Button from "@/src/components/General/Button";

const Header = (props) => {
  return <Col styles="bg-white p-4">{props.children}</Col>;
};

const Info = (props) => {
  return (
    <Col>
      <Row styles="justify-between relative"></Row>
      {props.children}
    </Col>
  );
};

const TicketItem = (props) => {
  return (
    <Col styles="divide-y divide-dashed shadow-md overflow-hidden rounded-md border">
      {props.children}
      <Footer />
    </Col>
  );
};

const Footer = () => {
  return (
    <Row styles="bg-white p-4 justify-end">

    </Row>
  );
};

TicketItem.Header = Header;
TicketItem.Info = Info;

export default TicketItem;
