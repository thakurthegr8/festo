import React from "react";
import Grid from "@/src/components/Layout/Grid";
import Navbar from "@/src/sections/Navbar";
import Col from "@/src/components/Layout/Col";
import Container from "@/src/components/Layout/Container";
import Typography from "@/src/components/General/Typography";
import Form from "@/src/components/DataEntry/Form";
import Button from "@/src/components/General/Button";
import Row from "@/src/components/Layout/Row";
import PlusIcon from "@heroicons/react/20/solid/PlusIcon";

const formFields = [
  { label: "Name", Input: Form.Text, name: "name" },
  { label: "Date", Input: Form.Date, name: "date" },
  {
    label: "Location",
    Input: Form.Select,
    name: "location",
    options: [{ value: "ABC 1", placeholder: "abc1" }],
  },
  { label: "Time", Input: Form.Time, name: "time" },
  {
    label: "Type",
    Input: Form.Select,
    name: "type",
    options: [{ value: "ABC 1", placeholder: "abc1" }],
  },
  { label: "Group Reference", Input: Form.Text, name: "group_ref" },
];

const CreateEvent = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <Col styles="gap-4">
      <Container styles="max-w-5xl">
        <Navbar />
        <Grid styles="grid-cols-1 md:grid-cols-2 gap-4">
          <Col>
            <Typography variant="text-title font-black">
              Create Event
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
          <Col styles="bg-gray-300 justify-center items-center gap-4">
            <Col styles="justify-center items-center bg-white rounded-full p-4 shadow-md">
              <Button variant="btn-icon">
                <PlusIcon className="w-6 h-6" />
              </Button>
            </Col>
            <Typography>Add Poster...</Typography>
          </Col>
        </Grid>
      </Container>
    </Col>
  );
};

export default CreateEvent;
