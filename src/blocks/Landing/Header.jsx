import Image from "next/image";
import React from "react";
import Button from "../../components/General/Button";
import Typography from "../../components/General/Typography";
import Col from "../../components/Layout/Col";
import Container from "../../components/Layout/Container";

const Header = () => {
  return (
    <Col styles="items-center pt-12 sm:pt-24 pb-0 sm:pb-12 px-4 xl:px-0">
      <Container styles="items-center justify-center">
        <Col styles="sm:items-center justify-center gap-4">
          <Typography variant="text-title sm:text-7xl font-black tracking-tighter ">
            Introducing Prodroma
          </Typography>
          <Typography variant="text-normal text-general/75">
            Your Personal Symptom Checker
          </Typography>
          <Col styles="sm:items-center sm:justify-center gap-4 sm:flex-row">
            <Button size="btn-lg">Get Started</Button>
            <Button variant="btn-outlined-general" size="btn-lg">
              Learn More
            </Button>
          </Col>
          <Col styles="items-center justify-center">
            <Image
              src="/brand/brand.jpg"
              width={400}
              height={400}
              style={{ filter: " contrast(127%) hue-rotate(347deg) saturate(300%) " }}
              quality={100}
              unoptimized={false}
            />
          </Col>
        </Col>
      </Container>
    </Col>
  );
};

export default Header;
