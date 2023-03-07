import Form from "@/src/components/DataEntry/Form";
import moment from "moment";
export const createGroupHeading = "Create Group";
export const createGroupText = "Create Group";
export const createGroupLink = "/dashboard/create-group";

export const createGroupFormFields = [
  { label: "Name", Input: Form.Text, name: "name" },
];

export const dashboardGroupsTableCols = [
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
