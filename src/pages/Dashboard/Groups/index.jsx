import Table from "@/src/components/DataDisplay/Table";
import Button from "@/src/components/General/Button";
import Typography from "@/src/components/General/Typography";
import Card from "@/src/components/Layout/Card";
import Col from "@/src/components/Layout/Col";
import Row from "@/src/components/Layout/Row";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Dashboard from "..";

const tableCols = [
  {
    key: "name",
    placeholder: "Name",
    render: (text, obj, target) => (
      <Link
        href={`/dashboard/groups/${obj?.[target]}`}
        className="hover:underline"
      >
        {text}
      </Link>
    ),
    target: "_id",
  },
  { key: "category", placeholder: "Category" },
];

const GroupsDashboard = () => {
  const [groups, setGroups] = useState([]);
  const getGroups = async () => {
    try {
      const req = await axios.get("/api/groups");
      const res = await req.data;
      if (res) setGroups(res);
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };

  useEffect(() => {
    getGroups();
  }, []);

  return (
    <Dashboard>
      <Col styles="gap-4">
      <Typography variant="text-title font-black">Groups</Typography>
        <Row>
          <Link href="/dashboard/create-group">
            <Button>Create group</Button>
          </Link>
        </Row>
        <Col>
          <Card>
            {groups.length != 0 && <Table cols={tableCols} dataset={groups} />}
          </Card>
        </Col>
      </Col>
    </Dashboard>
  );
};

export default GroupsDashboard;
