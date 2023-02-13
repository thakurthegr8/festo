import Button from "@/src/components/General/Button";
import Col from "@/src/components/Layout/Col";
import Row from "@/src/components/Layout/Row";
import React from "react";
import Dashboard from "..";

const GroupsDashboard = () => {
  return (
    <Dashboard>
      <Col>
        <Row>
          <Button>Create group</Button>
        </Row>
      </Col>
    </Dashboard>
  );
};

export default GroupsDashboard;
