import React from "react";
import Col from "../../Layout/Col";

const Avatar = (props) => {
  return (
    <Col styles="justify-center items-center bg-primary text-white font-bold aspect-square rounded-full px-3 cursor-pointer">
      {props.name}
    </Col>
  );
};

export default Avatar;
