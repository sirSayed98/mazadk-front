import moment from "moment";

export const TimeNow = () => {
  var date = moment().format().split(":");
  var cuerrnt_date = date[0] + ":" + date[1];
  return cuerrnt_date;
};
