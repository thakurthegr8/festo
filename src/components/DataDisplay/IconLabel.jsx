import React from "react";
import Typography from "../General/Typography";
import Row from "../Layout/Row";

const IconLabel = (props) => {
  const { Icon, label } = props;
  return (
    <Row styles="gap-2 items-center">
      {Icon}
      <Typography variant="font-bold">{label}</Typography>
    </Row>
  );
};

export default IconLabel;
