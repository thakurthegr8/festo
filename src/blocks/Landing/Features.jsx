import Image from "next/image";
import React from "react";
import Typography from "../../components/General/Typography";
import Card from "../../components/Layout/Card";
import Col from "../../components/Layout/Col";
import Container from "../../components/Layout/Container";
import Grid from "../../components/Layout/Grid";
import Row from "../../components/Layout/Row";
import { features } from "../../constants/brand";

const Features = () => {
  return (
    <Col styles="py-12">
      <Container styles="max-w-5xl space-y-12 pl-4 pr-10 md:px-0">
        {features.map((item, index) => (
          <Card key={index} fancy>
            <Row
              styles={`sm:py-12 ${
                index % 2 != 0 ? "flex-col sm:flex-row-reverse" : "flex-col sm:flex-row"
              }`}
            >
              <Col styles="gap-4 flex-1">
                <Typography variant="text-title sm:text-3xl lg:text-5xl font-bold tracking-tighter place-items-center">
                  {item.title}
                </Typography>
                <Typography variant="text-normal sm:text-heading opacity-90">
                  {item.content}
                </Typography>
              </Col>
              <Col styles="sm:justify-center sm:items-center flex-1 ">
                <Image
                  src={item.src}
                  width={200}
                  height={200}
                  className="scale-50 sm:scale-100"
                  objectFit="contain"
                />
              </Col>
            </Row>
          </Card>
        ))}
      </Container>
    </Col>
  );
};

export default Features;
