import React from "react";
import Typography from "../General/Typography";
import Col from "../Layout/Col";
import Grid from "../Layout/Grid";

const Description = ({ obj }) => {
  return (
    <Col>
      {Object.keys(obj).map((item, index) =>
        typeof obj[item] === "object" ? (
          <details className="ml-2" key={index}>
            <summary>
              <Typography variant="text-heading inline font-bold">{item}</Typography>
            </summary>
            <Description obj={obj[item]} key={index} />
          </details>
        ) : (
          <Col key={index}>
            <Typography variant="text-heading font-bold text-primary">{item}</Typography>
            <Typography>{obj[item]}</Typography>
          </Col>
        )
      )}
    </Col>
  );
};

export default Description;
