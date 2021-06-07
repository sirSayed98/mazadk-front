import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/router";
import { MerchantRequest } from "../../Redux/actions/userAction";
import { popUpMessage } from "../utils/sweetAlert";

import TextField from "@material-ui/core/TextField";
const MerchantForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    companyName: "",
    phone: "",
    email: "",
    describtion: "",
  });

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(data);
    dispatch(MerchantRequest(data))
      .then((res) => {
        popUpMessage(
          "Your Request has been submitted",
          "We wil send you an email to inform you!",
          "success"
        );
      })
      .catch((error) => {
        popUpMessage("Error", error, "error");
      });
    setLoading(false);
  };

  return (
    <>
      <form onSubmit={onSubmit} autoComplete="on">
        <TextField
          label="Company Name"
          fullWidth
          required
          type="text"
          name="companyName"
          className="mb-3"
          variant="outlined"
          onChange={onChange}
          InputProps={{ inputProps: { minLength: 3, maxLength: 30 } }}
        />
        <TextField
          label="Phone"
          name="phone"
          fullWidth
          required
          type="text"
          className="mb-3"
          variant="outlined"
          onChange={onChange}
          InputProps={{ inputProps: { minLength: 11, maxLength: 11 } }}
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          required
          type="email"
          className="mb-3"
          variant="outlined"
          onChange={onChange}
          InputProps={{ inputProps: { minLength: 3, maxLength: 100 } }}
        />
        <TextField
          id="outlined-multiline-static"
          label="Describtion"
          name="describtion"
          multiline
          rows={4}
          className="mb-4"
          variant="outlined"
          fullWidth
          onChange={onChange}
          InputProps={{ inputProps: { minLength: 10, maxLength: 400 } }}
        />
        <button
          disabled={loading}
          className={`master_button btn btn-lg btn-block`}
        >
          Request
        </button>
      </form>
    </>
  );
};

export default MerchantForm;
