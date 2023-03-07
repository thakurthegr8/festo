import Form from "@/src/components/DataEntry/Form";
import moment from "moment";
export const createCategoryHeading = "Create Category";
export const createCategoryText = "Create Category";
export const createCategoryLink = "/dashboard/create-category";

export const createCategoryFormFields = [
  { label: "Name", Input: Form.Text, name: "name" },
];

export const dashboardCategoriesTableCols = [
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
