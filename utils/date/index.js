import moment from "moment";

export const timeStringNormalization = (timeString) => {
  return moment(timeString, "h:mm a").format("h:mm a");
};
