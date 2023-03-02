import React from "react";
import Col from "../../Layout/Col";

const Avatar = (props) => {
  const initial = props.name.split(" ")
  .reduce((prev, curr) => prev + curr[0], "");
  return (
    <Col styles="justify-center items-center bg-primary text-white font-bold aspect-square rounded-full px-3 cursor-pointer">
      {initial}
    </Col>
  );
};

export default Avatar;
