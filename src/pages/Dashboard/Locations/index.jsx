import React from "react";
import Table from "@/src/components/DataDisplay/Table";
import Button from "@/src/components/General/Button";
import Card from "@/src/components/Layout/Card";
import Col from "@/src/components/Layout/Col";
import Row from "@/src/components/Layout/Row";
import Dashboard from "..";
import Link from "next/link";
import useLocations from "@/src/hooks/useLocations";
import moment from "moment";
import Typography from "@/src/components/General/Typography";
import DashboardTable from "@/src/elements/DashboardTable";

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

const LocationsDashboard = () => {
  const { locations, loading, error } = useLocations();

  return (
    <Dashboard>
      <Col styles="gap-4">
        <Typography variant="text-title font-black">Locations</Typography>
        <Row>
          <Link href="/dashboard/create-location">
            <Button>Create location</Button>
          </Link>
        </Row>
        <DashboardTable
          error={error}
          loading={loading}
          data={locations}
          cols={tableCols}
        />
      </Col>
    </Dashboard>
  );
};

export default LocationsDashboard;
