import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./MazadForm.module.css";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import { TimeNow } from "../utils/GetCurrentTime";
import { CreateMazad } from "../../Redux/actions/mazadActions";
import { popUpMessage } from "../utils/sweetAlert";

import { useRouter } from "next/router";
const MazadForm = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const router = useRouter();

  const [data, setData] = useState({
    name: "",
    describtion: "",
    start_price: 0,
    market_price: 0,
    expected_price: 0,
    start_time: 0,
    end_time: 0,
    merchant: userInfo && userInfo._id,
  });

  const [timeNow, setTimeNow] = useState(TimeNow());
  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setTimeNow(TimeNow());

    if (data.start_time < timeNow) {
      popUpMessage(
        "Start Time Less than Current Time",
        "increase start time",
        "error"
      );
    } else if (data.end_time < timeNow) {
      popUpMessage(
        "End Time Less than Current Time",
        "increase start time",
        "error"
      );
    } else if (data.start_time > data.end_time) {
      popUpMessage(
        "End Time less than Start Time",
        "increase end time",
        "error"
      );
    } else {
      setLoading(true);
      dispatch(CreateMazad(data))
        .then((id) => {
          setLoading(false);

          popUpMessage("Done", "upload photo now", "success");
          router.push(`/Edit_mazad/${id}`);
        })
        .catch((err) => {
          setLoading(false);
          popUpMessage("Error", err, "error");
        });
    }
  };

  return (
    <div>
      <div className="container">
        <div className={`${style.formContainer} d-flex justify-content-center`}>
          <div className={`${style.formBody}`}>
            <h1 className="text-center display-3">Mazad</h1>
            <form onSubmit={onSubmit} className="mt-4">
              <TextField
                label="Name"
                fullWidth
                required
                type="text"
                className="mb-3"
                variant="outlined"
                InputProps={{ inputProps: { minLength: 3, maxLength: 30 } }}
                name="name"
                onChange={onChange}
              />
              <TextField
                label="Describtion"
                fullWidth
                required
                type="text"
                className="mb-3"
                variant="outlined"
                InputProps={{ inputProps: { minLength: 8, maxLength: 50 } }}
                name="describtion"
                onChange={onChange}
              />
              <TextField
                label="Start Price"
                fullWidth
                required
                type="number"
                className="mb-3"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">L.E</InputAdornment>
                  ),
                }}
                name="start_price"
                onChange={onChange}
              />
              <TextField
                label="Market Price"
                fullWidth
                required
                type="number"
                className="mb-3"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">L.E</InputAdornment>
                  ),
                }}
                name="market_price"
                onChange={onChange}
              />
              <TextField
                label="Increasing Value"
                fullWidth
                required
                type="number"
                className="mb-3"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">L.E</InputAdornment>
                  ),
                }}
                name="increased_value"
                onChange={onChange}
              />
              <TextField
                label="Expected Price"
                fullWidth
                required
                type="number"
                className="mb-3"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">L.E</InputAdornment>
                  ),
                }}
                name="expected_price"
                onChange={onChange}
              />
              <TextField
                required
                fullWidth
                label="Start At"
                type="datetime-local"
                className="mb-3"
                name="start_time"
                defaultValue={TimeNow()}
                onChange={onChange}
              />
              <TextField
                required
                fullWidth
                label="End At"
                type="datetime-local"
                className="mb-5"
                name="end_time"
                defaultValue={TimeNow()}
                onChange={onChange}
              />
              <div className="d-flex justify-content-center">
                <button
                  disabled={loading}
                  className={`master_button btn btn-lg mb-5`}
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MazadForm;
