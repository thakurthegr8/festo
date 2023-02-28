import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Grid from "@/src/components/Layout/Grid";
import Navbar from "@/src/sections/Navbar";
import Col from "@/src/components/Layout/Col";
import Container from "@/src/components/Layout/Container";
import Typography from "@/src/components/General/Typography";
import Form from "@/src/components/DataEntry/Form";
import Button from "@/src/components/General/Button";
import Row from "@/src/components/Layout/Row";

const formFields = [{ label: "Name", Input: Form.Text, name: "name" }];

const CreateLocation = () => {
  const onSubmit = async (formData) => {
    try {
      formData = { ...formData, name: formData.name.toLowerCase() };
      const req = await axios.post("/api/locations/create", formData);
      const res = await req.data;
      if (res) alert("success");
      console.log(res);
    } catch (error) {
      alert("failed");
      console.log(error);
    }
  };
  return (
    <Col styles="gap-4">
      <Container styles="max-w-5xl">
        <Navbar />
        <Grid styles="grid-cols-1 md:grid-cols-2 gap-4">
          <Col>
            <Typography variant="text-title font-black">
              Create Location
            </Typography>
            <Form styles="space-y-4" onSubmit={onSubmit}>
              {formFields.map(({ Input, ...props }, index) => (
                <Input {...props} key={index} />
              ))}
              <Row>
                <Button>Submit</Button>
              </Row>
            </Form>
          </Col>
        </Grid>
      </Container>
    </Col>
  );
};

export default CreateLocation;
