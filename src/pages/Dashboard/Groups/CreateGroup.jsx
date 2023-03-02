import React, { useContext, useState } from "react";
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
import AuthContext from "@/src/contexts/Auth";
import { toast } from "react-toastify";
import useCategories from "@/src/hooks/useCategories";

const formFields = [
  { label: "Name", Input: Form.Text, name: "name" },
];

const CreateGroup = () => {
  const [loading, setLoading] = useState(false);
  const categories = useCategories().map((item) => ({
    placeholder: item.name,
    value: item._id,
  }));
  const ctx = useContext(AuthContext);
  const userId = ctx.user.email;
  const onSubmit = async (formData) => {
    try {
      formData = { ...formData, created_by: userId };
      setLoading(true);
      const req = await axios.post("/api/groups/create", formData);
      const res = await req.data;
      if (res) {
        console.log(res);
        toast("success", { type: "success" });
      }
    } catch (error) {
      console.log(error);
      toast("Error", { type: "error" });
    } finally {
      setLoading(false);
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
              <Form.Select label="Type" name="category" options={categories} />
              <Row>
                <Button loading={loading}>Submit</Button>
              </Row>
            </Form>
          </Col>
        </Grid>
      </Container>
    </Col>
  );
};

export default CreateGroup;
