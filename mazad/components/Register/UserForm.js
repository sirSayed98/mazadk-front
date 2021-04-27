import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import {
  Check,
  ONLY_NUMBER_REG,
  PASSWORD_REG,
  PASSWORD_MSG,
  NUMBERS_MSG,
} from "../utils/CheckRegExp";

import TextField from "@material-ui/core/TextField";
const UserForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [phoneErr, setPhoneErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [passwordConfirmErr, setConfirmPasswordErr] = useState("");

  const { password, confirmPassword } = data;

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setConfirmPasswordErr("");
    if (password !== confirmPassword) {
      setConfirmPasswordErr("Password and Confirm Password must be matched");
    } else {
      console.log(data);
    }
  };

  const handlePhone = (e) => {
    setPhoneErr("");
    let reg = Check(ONLY_NUMBER_REG, e.target.value);
    if (!reg) {
      setPhoneErr(NUMBERS_MSG);
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };
  const handlePassword = (e) => {
    setPasswordErr("");
    let reg = Check(PASSWORD_REG, e.target.value);
    if (!reg) {
      setPasswordErr(PASSWORD_MSG);
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  return (
    <>
      {/* <button onClick={() => console.log(phoneErr)}>Test </button> */}
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
          label="Phone"
          fullWidth
          required
          type="text"
          className="mb-3"
          variant="outlined"
          InputProps={{ inputProps: { minLength: 11, maxLength: 11 } }}
          name="phone"
          onChange={handlePhone}
          error={Boolean(phoneErr)}
          helperText={phoneErr}
        />
        <TextField
          label="Address"
          fullWidth
          required
          type="text"
          className="mb-3"
          variant="outlined"
          InputProps={{ inputProps: { minLength: 10, maxLength: 50 } }}
          name="address"
          onChange={onChange}
        />
        <TextField
          label="Email"
          fullWidth
          required
          type="email"
          className="mb-3"
          variant="outlined"
          InputProps={{ inputProps: { minLength: 5, maxLength: 50 } }}
          name="email"
          onChange={onChange}
        />
        <TextField
          label="Password"
          fullWidth
          required
          type="password"
          className="mb-3"
          variant="outlined"
          InputProps={{ inputProps: { minLength: 8, maxLength: 25 } }}
          name="password"
          onChange={handlePassword}
          error={Boolean(passwordErr)}
          helperText={passwordErr}
        />
        <TextField
          label="Confirm Password"
          fullWidth
          required
          type="password"
          className="mb-3"
          variant="outlined"
          InputProps={{ inputProps: { minLength: 8, maxLength: 25 } }}
          minLength="8"
          maxLength="25"
          name="confirmPassword"
          onChange={onChange}
          error={Boolean(passwordConfirmErr)}
          helperText={passwordConfirmErr}
        />

        <button className={`master_button btn btn-lg btn-block`}>
          Register
        </button>
      </form>
    </>
  );
};

export default UserForm;
