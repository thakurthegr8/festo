import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Form from "../../components/DataEntry/Form";
import Button from "../../components/General/Button";
import Typography from "../../components/General/Typography";
import Card from "../../components/Layout/Card";
import Col from "../../components/Layout/Col";
import Container from "../../components/Layout/Container";

const LoginForm = () => {
  const [formSubmitting, setForSubmitting] = useState(false);
  const router = useRouter();
  const onSubmit = async (formValues) => {
    console.log(formValues);
    try {
      setForSubmitting(true);
      const login = await axios.post("/api/auth/login", formValues);
      const loginData = await login.data;
      if (login.status === 200) {
        setForSubmitting(false);
        router.push("/dashboard");
      }
    } catch (error) {
      setForSubmitting(false);
      console.log(error);
      alert("unauthenticated");
    }
  };
  return (
    <Container styles="max-w-sm">
      <Card fancy>
        <Typography variant="text-title font-semibold mb-4">Login</Typography>
        <Form onSubmit={onSubmit}>
          <Col styles="space-y-2">
            <Form.Email name="email" id="login_form_email" label="Email" />
            <Form.Password
              name="password"
              id="login_form_password"
              label="Password"
            />
            <Button size="btn-lg" loading={formSubmitting}>
              Login
            </Button>
            <Button variant="btn-outlined-general" size="btn-lg">
              Register
            </Button>
          </Col>
        </Form>
      </Card>
    </Container>
  );
};

export default LoginForm;
