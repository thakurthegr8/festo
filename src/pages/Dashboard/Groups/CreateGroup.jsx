import React from "react";
import Grid from "@/src/components/Layout/Grid";
import Navbar from "@/src/sections/Navbar";
import Col from "@/src/components/Layout/Col";
import Container from "@/src/components/Layout/Container";
import Typography from "@/src/components/General/Typography";
import Form from "@/src/components/DataEntry/Form";
import Button from "@/src/components/General/Button";
import Row from "@/src/components/Layout/Row";
import Link from "next/link";
import axios from "axios";

const formFields = [
  { label: "Name", Input: Form.Text, name: "name" },
  {
    label: "Type",
    Input: Form.Select,
    name: "category",
    options: [{ value: "ABC 1", placeholder: "abc1" }],
  },
];

const CreateGroup = () => {
  const onSubmit = async (formData) => {
    try {
      formData = { ...formData, created_by: "rt040371@gmail.com" };
      const createGroup = await axios.post("/api/groups/create", formData);
      const createGroupRes = await createGroup.data;
      if (createGroupRes) {
        console.log(createGroupRes);
        alert("success");
      }
    } catch (error) {
      console.log(error);
      alert("failed");
    }
  };

  return (
    <Col styles="gap-4">
      <Container styles="max-w-5xl">
        <Navbar />
        <Grid styles="grid-cols-1 md:grid-cols-2 gap-4">
          <Col>
            <Typography variant="text-title font-black">
              Create Group
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

export default CreateGroup;
