import React from "react";
import Button from "@/src/components/General/Button";
import Typography from "@/src/components/General/Typography";
import Col from "@/src/components/Layout/Col";
import Image from "next/image";
import { signIn } from "next-auth/react";

const LeftColumn = () => {
  return (
    <Col styles="justify-center pl-16 gap-4">
      <Image src="brand/Festo.svg" width={200} height={100} />
      <Typography>Login to continue</Typography>
      <Button onClick={()=>signIn("okta")}>Login with Okta</Button>
    </Col>
  );
};

export default LeftColumn;
