import React from "react";
import Image from "next/image";
import Col from "@/src/components/Layout/Col";
import Container from "@/src/components/Layout/Container";
import Grid from "@/src/components/Layout/Grid";

import Navbar from "@/src/sections/Navbar";
import Typography from "@/src/components/General/Typography";
import Row from "@/src/components/Layout/Row";
import Sidebar from "./Sidebar";

const Dashboard = (props) => {
  return (
    <Row styles="h-screen">
      <Sidebar />
      <Col styles="flex-1">
        <Container styles="px-4">
          <Navbar withoutLogo />
          {props.children}
        </Container>
      </Col>
    </Row>
  );
};

export default Dashboard;
