import React, { useEffect, useState } from "react";
import Table from "@/src/components/DataDisplay/Table";
import Button from "@/src/components/General/Button";
import Card from "@/src/components/Layout/Card";
import Col from "@/src/components/Layout/Col";
import Row from "@/src/components/Layout/Row";
import axios from "axios";
import Dashboard from "..";
import Link from "next/link";
import useCategories from "@/src/hooks/useCategories";
import moment from "moment";
import Typography from "@/src/components/General/Typography";

const tableCols = [
  {
    key: "name",
    placeholder: "Name",
  },
  {
    key: "createdAt",
    placeholder: "Created At",
    render: (text, obj, target) => <>{moment(text).format("LLL")}</>,
  },
  {
    key: "updatedAt",
    placeholder: "Updated At",
    render: (text, obj, target) => <>{moment(text).format("LLL")}</>,
  },
];

const CategoriesDashboard = () => {
  const categories = useCategories();
  return (
    <Dashboard>
      <Col styles="gap-4">
        <Typography variant="text-title font-black">Category</Typography>
        <Row>
          <Link href="/dashboard/create-category">
            <Button>Create Category</Button>
          </Link>
        </Row>
        <Col>
          <Card>
            {categories.length != 0 && (
              <Table cols={tableCols} dataset={categories} />
            )}
          </Card>
        </Col>
      </Col>
    </Dashboard>
  );
};

export default CategoriesDashboard;
