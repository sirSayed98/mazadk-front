import React, { useState, useEffect, useRef } from "react";
import style from "./LoginScreen.module.css";
import TextField from "@material-ui/core/TextField";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/actions/userAction";
import { useRouter } from "next/router";
const LoginScreen = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [userInfo]);
  return (
    <div className={`${style.login_form}`}>
      <div
        className={`${style.login_form_container} col-sm-10 col-lg-8 col-xl-6`}
      >
        <form autoComplete="on" onSubmit={submitHandler}>
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
          <button className={`master_button btn btn-lg btn-block mt-5`}>
            Login
          </button>
        </form>
        <div className="mt-3">
          <Link href={"/Forget_password"}>Forget Password</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
