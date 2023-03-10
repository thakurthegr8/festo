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
import withSession from "@/src/middlewares/withSession";
import axios from "axios";
import Image from "next/image";
import moment from "moment";
import { loader } from "@/utils/image";


const DashboardEventPage = (props) => {
  return (
    <Dashboard>
      <Grid styles="grid-cols-1 md:grid-cols-2 gap-4">
        <Grid styles="grid-cols-1 md:grid-cols-2 gap-4 capitalize place-content-center">
          <Typography variant="text-title font-black col-span-2">
            {props.event.name}
          </Typography>
          <Col styles="col-span-2">
            <Image
              loader={loader}
              src={props.event.media_url}
              width={200}
              height={200}
            />
          </Col>
          <Col styles="col-span-2">
            <IconLabel
              label={props.event.type.name}
              Icon={<ArrowIcon className="w-8 h-8 rotate-45 text-primary" />}
            />
          </Col>
          <Col>
            <IconLabel
              label={moment(props.event.date).format("LL")}
              Icon={<CalendarIcon className="w-6 h-6 text-primary" />}
            />
          </Col>
          <Col>
            <IconLabel
              label={props.event.time}
              Icon={<ClockIcon className="w-6 h-6 text-primary" />}
            />
          </Col>
          <Col>
            <IconLabel
              label={props.event.location.name}
              Icon={<MapPinIcon className="w-6 h-6 text-primary" />}
            />
          </Col>
          <Col>
            <IconLabel
              label={props.event.group_ref.name}
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
            <Button variant="btn-primary btn-sm bg-red-500">
              Delete event
            </Button>
          </Row>
        </Grid>
      </Grid>
    </Dashboard>
  );
};

export default DashboardEventPage;

DashboardEventPage.auth = true;

export const getServerSideProps = withSession(async (ctx) => {
  const { url } = ctx.req;
  try {
    const event = await axios.get(`${url}/api/events/${ctx.query.event_id}`);
    const eventData = await event.data;
    if (Object.keys(eventData).length == 0) {
      return { notFound: true };
    }
    console.log(eventData);
    return { props: { event: eventData, } };
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
});
