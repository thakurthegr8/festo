import axios from "axios";
import React, { useState } from "react";
import classes from "./Categories.module.css";
import { createCategoryFormFields, createCategoryHeading } from "./data";
import useCreateCategory from "@/src/hooks/create/useCreateCategory";
import Grid from "@/src/components/Layout/Grid";
import Navbar from "@/src/sections/Navbar";
import Col from "@/src/components/Layout/Col";
import Container from "@/src/components/Layout/Container";
import Typography from "@/src/components/General/Typography";
import Form from "@/src/components/DataEntry/Form";
import Button from "@/src/components/General/Button";
import Row from "@/src/components/Layout/Row";
import Dialog from "@/src/components/Dialogs";

const CreateCategory = () => {
  const createCategory = useCreateCategory();
  const [confirmSubmission, setConfirmSubmission] = useState(true);
  const [open, toggle] = useState(false);

  return (
    <Col styles="gap-4">
      <Container styles={classes.categoriesContainer}>
        <Navbar />
        <Grid styles={classes.createCategoryFormGridLayout}>
          <Col>
            <Typography variant="text-title font-black">
              {createCategoryHeading}
            </Typography>
            <Form
              styles="space-y-4"
              onSubmit={(formData) => {
                toggle(true);
              }}
            >
              {createCategoryFormFields.map(({ Input, ...props }, index) => (
                <Input {...props} key={index} />
              ))}
              <Row>
                <Button loading={createCategory.loading}>Submit</Button>
              </Row>
            </Form>
          </Col>
        </Grid>
      </Container>
      <Dialog.Confirm
        open={open}
        toggle={toggle}
        confirm={setConfirmSubmission}
      >
        <Col styles="bg-white p-4">Are you sure to proceed?</Col>
      </Dialog.Confirm>
    </Col>
  );
};

export default CreateCategory;
