import React from "react";
import Link from "next/link";
import {
  createCategoryHeading,
  createCategoryLink,
  createCategoryText,
  dashboardCategoriesTableCols,
} from "./data";

import classes from "./Categories.module.css";
import Col from "@/src/components/Layout/Col";
import Row from "@/src/components/Layout/Row";
import Dashboard from "..";
import useCategories from "@/src/hooks/useCategories";
import Typography from "@/src/components/General/Typography";
import DashboardTable from "@/src/elements/DashboardTable";

const CategoriesDashboard = () => {
  const { categories, loading, error } = useCategories();
  return (
    <Dashboard>
      <Col styles={classes.columns}>
        <Typography variant="text-title font-black">
          {createCategoryHeading}
        </Typography>
        <Row>
          <Link href={createCategoryLink} className="btn-sm btn-primary">
            {createCategoryText}
          </Link>
        </Row>
        <DashboardTable
          cols={dashboardCategoriesTableCols}
          data={categories}
          loading={loading}
          error={error}
        />
      </Col>
    </Dashboard>
  );
};

export default CategoriesDashboard;
