import React from "react";
import Link from "next/link";
import classes from "./Groups.module.css";
import Typography from "@/src/components/General/Typography";
import Col from "@/src/components/Layout/Col";
import Row from "@/src/components/Layout/Row";
import DashboardTable from "@/src/elements/DashboardTable";
import useGroups from "@/src/hooks/useGroups";
import Dashboard from "..";
import {
  createGroupHeading,
  createGroupLink,
  createGroupText,
  dashboardGroupsTableCols,
} from "./data";

const GroupsDashboard = () => {
  const { groups, error, loading } = useGroups();
  return (
    <Dashboard>
      <Col styles={classes.columns}>
        <Typography variant="text-title font-black">
          {createGroupHeading}
        </Typography>
        <Row>
          <Link href={createGroupLink} className="btn-sm btn-primary">
            {createGroupText}
          </Link>
        </Row>
        <DashboardTable
          data={groups}
          loading={loading}
          error={error}
          cols={dashboardGroupsTableCols}
        />
      </Col>
    </Dashboard>
  );
};

export default GroupsDashboard;
