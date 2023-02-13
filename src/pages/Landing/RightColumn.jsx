import React from "react";
import Typography from "@/src/components/General/Typography";
import Col from "@/src/components/Layout/Col";
import Image from "next/image";

const RightColumn = () => {
  return (
    <Col styles="bg-general justify-between col-span-2">
      <Typography variant="text-white text-title mt-12 ml-12">
        Let us make your next event unforgettable.
      </Typography>
      <Image src="brand/landing-hero.svg" width={1000} height={500} />
    </Col>
  );
};

export default RightColumn;
