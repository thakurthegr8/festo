import React, { useContext, useEffect, useState } from "react";
import Grid from "@/src/components/Layout/Grid";
import Navbar from "@/src/sections/Navbar";
import Col from "@/src/components/Layout/Col";
import Container from "@/src/components/Layout/Container";
import Typography from "@/src/components/General/Typography";
import Form from "@/src/components/DataEntry/Form";
import Button from "@/src/components/General/Button";
import Row from "@/src/components/Layout/Row";
import axios from "axios";
import AuthContext from "@/src/contexts/Auth";
import { toast } from "react-toastify";
import useCategories from "@/src/hooks/useCategories";
import { createGroupHeading } from "./data";
import useCreateGroup from "@/src/hooks/create/useCreateGroup";
import Dialog from "@/src/components/Dialogs";
import Confirm from "@/src/components/Dialogs/Confirm";

const formFields = [{ label: "Name", Input: Form.Text, name: "name" }];

const CreateGroup = () => {
  const [confirmSubmission, setConfirmSubmission] = useState(false);
  const [formData, setFormData] = useState(null);
  const [open, toggle] = useState(false);
  const { categories } = useCategories();
  const createGroup = useCreateGroup();
  const options = categories.map((item) => ({
    placeholder: item.name,
    value: item._id,
  }));
  useEffect(() => {
    if (confirmSubmission) {
      createGroup.onSubmit(formData);
      setConfirmSubmission(false);
    }
  }, [confirmSubmission]);
  return (
    <Col styles="gap-4">
      <Container styles="max-w-5xl">
        <Navbar />
        <Grid styles="grid-cols-1 md:grid-cols-2 gap-4">
          <Col>
            <Typography variant="text-title font-black">
              {createGroupHeading}
            </Typography>
            <Form
              styles="space-y-4"
              onSubmit={(formData) => {
                toggle(true);
                setFormData(formData);
              }}
            >
              {formFields.map(({ Input, ...props }, index) => (
                <Input {...props} key={index} />
              ))}
              <Form.Select label="Type" name="category" options={options} />
              <Row>
                <Button loading={createGroup.loading}>Submit</Button>
              </Row>
            </Form>
          </Col>
        </Grid>
      </Container>
      <Confirm
        open={open}
        toggle={toggle}
        confirm={setConfirmSubmission}
      >
        <Col styles="bg-white p-4">Are you sure to proceed?</Col>
      </Confirm>
    </Col>
  );
};

export default CreateGroup;
