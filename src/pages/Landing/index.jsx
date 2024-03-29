import React from "react";
import Grid from "@/src/components/Layout/Grid";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import Col from "@/src/components/Layout/Col";
import Navbar from "@/src/sections/Navbar";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Grid styles="grid-cols-1 md:grid-cols-3 h-screen ">
        <LeftColumn />
        <RightColumn />
      </Grid>
    </>
  );
};

export default Landing;
