import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Form from "../../components/DataEntry/Form";
import Button from "../../components/General/Button";
import Typography from "../../components/General/Typography";
import Card from "../../components/Layout/Card";
import Col from "../../components/Layout/Col";
import Container from "../../components/Layout/Container";
import register from "../../constants/validators/register";

const genderOptions = [
  { placeholder: "Male", value: "male" },
  { placeholder: "Female", value: "female" },
  { placeholder: "Others", value: "others" },
];

const RegisterForm = () => {
  const router = useRouter();
  const [formSubmitting, setForSubmitting] = useState(false);
  const onSubmit = async (formValues) => {
    const { confirm_password, ...others } = formValues;
    console.log(others);
    try {
      setForSubmitting(true);
      const addUser = await axios.post("/api/auth/register", others);
      const addUserData = await addUser.data;
      if (addUser.status === 200) {
        setForSubmitting(false);
        router.push(`/auth/verify`);
      }
    } catch (error) {
      setForSubmitting(false);
      console.log(error);
    }
  };
  return (
    <Container styles="max-w-sm pl-4 pr-10 md:px-0">
      <Card fancy>
        <Typography variant="text-title font-semibold mb-4">
          Register
        </Typography>
        <Form onSubmit={onSubmit} validator={register}>
          <Col styles="space-y-1">
            <Form.Text
              name="first_name"
              id="register_form_first_name"
              label="First Name"
              // required={true}
            />
            <Form.Text
              name="last_name"
              id="register_form_last_name"
              label="Last Name"
              // required={true}
            />
            <Form.Number
              name="age"
              id="register_form_age"
              label="Age"
              // required={true}
            />
            <Form.Select
              name="gender"
              id="register_form_gender"
              label="Gender"
              options={genderOptions}
            />
            <Form.Email
              name="email"
              id="register_form_email"
              label="Email"
              // required={true}
            />
            <Form.Password
              name="password"
              id="register_form_password"
              label="Password"
              // required={true}
            />
            <Form.Password
              name="confirm_password"
              id="register_form_confirm_password"
              label="Confirm Password"
              // required={true}
            />
            <Button size="btn-lg" loading={formSubmitting}>
              Register
            </Button>
          </Col>
        </Form>
        <Button variant="btn-outlined-general w-full mt-2" size="btn-lg">
          Login
        </Button>
      </Card>
    </Container>
  );
};

export default RegisterForm;
