import React from "react";
import Table from "@/src/components/DataDisplay/Table";
import Col from "@/src/components/Layout/Col";
import Loader from "../Loader";
import Card from "@/src/components/Layout/Card";

const DashboardTable = (props) => {
  if (props?.error) return <>Error</>;
  if (props?.loading)
    return (
      <Card>
        <Col styles="justify-center items-center">
          <Loader />
        </Col>
      </Card>
    );
  return (
    <Col>
      <Card>
        {props?.categories.length != 0 && (
          <Table cols={props?.cols} dataset={props?.categories} />
        )}
      </Card>
    </Col>
  );
};

export default DashboardTable;
