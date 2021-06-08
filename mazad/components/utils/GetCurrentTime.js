import moment from "moment";

export const TimeNow = () => {
  var date = moment().format().split(":");
  var cuerrnt_date = date[0] + ":" + date[1];
  return cuerrnt_date;
};

export const RelativeDate = (time) => {

  return time
  /*
  var t = time.split("T");
  t = t[0].split("-");


  var currentDate = new Date()
    .toJSON()
    .slice(0, 10)
    .replace(/-/g, "/")
    .split("/");

  console.log(currentDate)  
  var today = moment([
    currentDate[0] * 1,
    currentDate[1] * 1,
    currentDate[2] * 1,
  ]);
  var date = moment([t[0] * 1, t[1] * 1, t[2] * 1]);


  if (date.from(today) == "Invalid date") {
    return time;
  } else {
    return date.from(today);
  }*/
};
