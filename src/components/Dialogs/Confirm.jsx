import React, { useContext } from "react";
import Dialog, { DialogContext } from ".";
import Button from "../General/Button";
import Col from "../Layout/Col";
import Row from "../Layout/Row";

const Confirm = (props) => {
  const confirm = () => {
    props.confirm(true);
    props.toggle(false);
  };
  const close = () => {
    props.toggle(false);
  };
  return (
    <Dialog {...props}>
      <Col>
        {props.children}
        <Col styles="justify-end p-2 sm:flex-row gap-2 border-t">
          <Button onClick={confirm} variant="btn-primary btn-sm">
            Submit
          </Button>
          <Button onClick={close} variant="btn-text btn-sm">
            Cancel
          </Button>
        </Col>
      </Col>
    </Dialog>
  );
};

export default Confirm;
