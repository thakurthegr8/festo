import React, { useContext } from "react";
import { DialogContext } from ".";
import Button from "../General/Button";
import Col from "../Layout/Col";
import Row from "../Layout/Row";

const Alert = (props) => {
  const close = () => {
    props.toggle(false);
  };
  return (
    <Col>
      {props.children}
      <Row styles="justify-end p-4">
        <Button onClick={close}>OK</Button>
      </Row>
    </Col>
  );
};

export default Alert;
