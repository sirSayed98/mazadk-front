import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

import { login } from "../../Redux/actions/userAction";
import { popUpMessage } from "../utils/sweetAlert";

import style from "./LoginScreen.module.css";
import TextField from "@material-ui/core/TextField";

import { Animated } from "react-animated-css";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo, success } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
    if (success) {
      popUpMessage("Welcome To Mazadk", "Bid Now!", "success");
    }
    if (error) {
      popUpMessage("Failed", error, "error");
    }
  }, [userInfo, success, error]);
  return (
    <Animated
      animationIn="bounceInLeft"
      animationOut="fadeOut"
      isVisible={true}
    >
      <div className={`${style.login_form}`}>
        <div
          className={`${style.login_form_container} col-sm-10 col-lg-8 col-xl-6`}
        >
          <form className="mt-5" autoComplete="on" onSubmit={submitHandler}>
            <TextField
              label="Email"
              fullWidth
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              name="email"
            />
            <TextField
              label="Password"
              fullWidth
              required
              type="password"
              variant="outlined"
              className="mt-3"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              disabled={loading}
              className={`master_button btn btn-lg btn-block mt-5`}
            >
              Login
            </button>
          </form>
          <div className="mt-3 mb-4">
            <Link href={"/forget_password"}>Forget Password</Link>
          </div>
        </div>
      </div>
    </Animated>
  );
};

export default LoginScreen;
