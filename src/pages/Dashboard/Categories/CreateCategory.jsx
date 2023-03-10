import React, { useEffect, useState } from "react";
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
import Confirm from "@/src/components/Dialogs/Confirm";

const CreateCategory = () => {
  const createCategory = useCreateCategory();
  const [confirmSubmission, setConfirmSubmission] = useState(false);
  const [formData, setFormData] = useState(null);
  const [open, toggle] = useState(false);
  useEffect(() => {
    if (confirmSubmission) {
      createCategory.onSubmit(formData);
      setConfirmSubmission(false);
    }
  }, [confirmSubmission]);
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
                setFormData(formData);
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

export default CreateCategory;
