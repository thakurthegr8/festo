import React, { useEffect, useState } from "react";
import Table from "@/src/components/DataDisplay/Table";
import Button from "@/src/components/General/Button";
import Card from "@/src/components/Layout/Card";
import Col from "@/src/components/Layout/Col";
import Row from "@/src/components/Layout/Row";
import axios from "axios";
import Dashboard from "..";
import Link from "next/link";
import moment from "moment";

const tableCols = [
  {
    key: "name",
    placeholder: "Name",
    render: (text, obj, target) => (
      <Link
        href={`/dashboard/events/${obj?.[target]}`}
        className="hover:underline"
      >
        {text}
      </Link>
    ),
    target: "_id",
  },
  {
    key: "date",
    placeholder: "Date",
    render: (text, obj, target) => <>{moment(text).format("LL")}</>,
  },
  {
    key: "time",
    placeholder: "Time",
    render: (text, obj, target) => {
      const seconds = text.split(":")[1];
      const minutes = text.split(":")[0];
      const momentInTime = moment()
        .add(seconds, "seconds")
        .add(minutes, "minutes")
        .format("LT");

      return <>{momentInTime.toString()}</>;
    },
  },
];

const EventsDashboard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const events = await axios.get("/api/events");
        const eventsData = await events.data;
        setEvents(eventsData);
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
  }, []);
  return (
    <Dashboard>
      <Col styles="gap-4">
        <Row>
          <Link href="/dashboard/create-event">
            <Button>Create event</Button>
          </Link>
        </Row>
        <Col>
          <Card>
            {events.length != 0 && <Table cols={tableCols} dataset={events} />}
          </Card>
        </Col>
      </Col>
    </Dashboard>
  );
};

export default EventsDashboard;
