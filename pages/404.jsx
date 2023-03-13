import Typography from "@/src/components/General/Typography";
import Col from "@/src/components/Layout/Col";
import Container from "@/src/components/Layout/Container";
import Navbar from "@/src/sections/Navbar";
import Page from "@/src/sections/Page";
import React from "react";

const NotFoundPage = () => {
  return (
    <Page title="Not found">
      <Container styles="max-w-5xl px-4 lg:px-0">
        <Navbar />
        <Col styles="justify-center items-center py-16">
          <Typography variant="text-8xl font-black text-primary">
            404
          </Typography>
          <Typography variant="text-title font-black">
            Resource Not found
          </Typography>
        </Col>
      </Container>
    </Page>
  );
};

export default NotFoundPage;

NotFoundPage.auth = false;
