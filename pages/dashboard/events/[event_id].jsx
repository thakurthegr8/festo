import React from "react";
import ArrowIcon from "@heroicons/react/20/solid/ArrowSmallUpIcon";
import Dashboard from "@/src/pages/Dashboard";
import Col from "@/src/components/Layout/Col";
import Typography from "@/src/components/General/Typography";
import Grid from "@/src/components/Layout/Grid";
import IconLabel from "@/src/components/DataDisplay/IconLabel";
import CalendarIcon from "@heroicons/react/24/outline/CalendarIcon";
import ClockIcon from "@heroicons/react/24/outline/ClockIcon";
import MapPinIcon from "@heroicons/react/24/outline/MapPinIcon";
import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
import UserPlusIcon from "@heroicons/react/24/outline/UserPlusIcon";
import Row from "@/src/components/Layout/Row";
import Button from "@/src/components/General/Button";

const DashboardEventPage = () => {
  return (
    <Dashboard>
      <Grid styles="grid-cols-1 md:grid-cols-2 gap-4">
        <Grid styles="grid-cols-1 md:grid-cols-2 gap-4">
          <Typography variant="text-title font-black col-span-2">
            Youthopia 2023
          </Typography>
          <Col styles="col-span-2">
            <IconLabel
              label="General Event"
              Icon={<ArrowIcon className="w-8 h-8 rotate-45 text-primary" />}
            />
          </Col>
          <Col>
            <IconLabel
              label="27 December 2023"
              Icon={<CalendarIcon className="w-6 h-6 text-primary" />}
            />
          </Col>
          <Col>
            <IconLabel
              label="9:00 PM"
              Icon={<ClockIcon className="w-6 h-6 text-primary" />}
            />
          </Col>
          <Col>
            <IconLabel
              label="Main Parking Area"
              Icon={<MapPinIcon className="w-6 h-6 text-primary" />}
            />
          </Col>
          <Col>
            <IconLabel
              label="Group ABC"
              Icon={<UserGroupIcon className="w-6 h-6 text-primary" />}
            />
          </Col>
          <Col>
            <IconLabel
              label="200"
              Icon={<UserPlusIcon className="w-6 h-6 text-primary" />}
            />
          </Col>
          <Row styles="col-span-2">
            <Button variant="btn-primary btn-sm bg-red-500">Delete event</Button>
          </Row>
        </Grid>
      </Grid>
    </Dashboard>
  );
};

export default DashboardEventPage;
