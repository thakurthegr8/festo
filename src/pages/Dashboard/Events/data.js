import Form from "@/src/components/DataEntry/Form";
import Typography from "@/src/components/General/Typography";
import { timeStringNormalization } from "@/utils/date";
import moment from "moment";
import Link from "next/link";
export const createEventHeading = "Create Event";
export const createEventText = "Create Event";
export const createEventLink = "/dashboard/create-event";

export const createEventFormFields = [
  { label: "Name", Input: Form.Text, name: "name" },
  { label: "Date", Input: Form.Date, name: "date" },
  { label: "Time", Input: Form.Time, name: "time" },
];

export const dashboardEventsTableCols = [
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
    render: (text, _obj, _target) => <>{moment(text).format("LL")}</>,
  },
  {
    key: "time",
    placeholder: "Time",
    render: (text, _obj, _target) => {
      return <Typography variant="uppercase">{timeStringNormalization(text)}</Typography>;
    },
  },
];
