import React from "react";
import styles from "./Ticket.module.css";
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

const Ticket = (props) => {
  return (
    <Col styles="divide-y divide-dashed shadow-md overflow-hidden rounded-md border">
      {props.children}
      <Footer />
    </Col>
  );
};

const Footer = () => {
  return (
    <Row styles="bg-white p-2 justify-end">
      <Button variant="btn-sm bg-gray-200">View ticket</Button>
    </Row>
  );
};

Ticket.Header = Header;
Ticket.Info = Info;

export default Ticket;
