import React, { useState, useEffect } from "react";

import style from "./MazadForm.module.css";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { TimeNow } from "../utils/GetCurrentTime";

const MazadForm = () => {
  const [data, setData] = useState({
    name: "",
    describtion: "",
    start_price: 0,
    market_price: 0,
    expected_peice: 0,
    start_time: 0,
    end_time: 0,
  });
  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
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
                InputProps={{ inputProps: { minLength: 3, maxLength: 20 } }}
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
                InputProps={{ inputProps: { minLength: 8, maxLength: 30 } }}
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
                onChange={onChange}
              />
              <TextField
                required
                fullWidth
                label="End At"
                type="datetime-local"
                className="mb-5"
                name="end_time"
                onChange={onChange}
              />
              <div className="d-flex justify-content-center">
                <button className={`master_button btn btn-lg mb-5`}>Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MazadForm;
