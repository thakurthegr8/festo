import React, { useEffect, useState } from "react";
import Table from "@/src/components/DataDisplay/Table";
import Button from "@/src/components/General/Button";
import Card from "@/src/components/Layout/Card";
import Col from "@/src/components/Layout/Col";
import Row from "@/src/components/Layout/Row";
import Dashboard from "..";
import Link from "next/link";
import Typography from "@/src/components/General/Typography";
import useEvents from "@/src/hooks/useEvents";
import DashboardTable from "@/src/elements/DashboardTable";
import { createEventLink, createEventText, dashboardEventsTableCols } from "./data";

const EventsDashboard = () => {
  const { events, loading, error } = useEvents();
  return (
    <Dashboard>
      <Col styles="gap-4">
        <Typography variant="text-title font-black">Events</Typography>
        <Row>
          <Link href={createEventLink} className="btn-primary btn-sm">
           {createEventText}
          </Link>
        </Row>
        <DashboardTable
          data={events}
          cols={dashboardEventsTableCols}
          loading={loading}
          error={error}
        />
      </Col>
    </Dashboard>
  );
};

export default EventsDashboard;
