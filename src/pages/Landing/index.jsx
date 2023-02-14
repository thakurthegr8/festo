import React from "react";
import Grid from "@/src/components/Layout/Grid";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

const Landing = () => {
  return (
    <Grid styles="grid-cols-3 h-screen gap-16">
      <LeftColumn />
      <RightColumn />
    </Grid>
  );
};

export default Landing;
