import React from "react";
import style from "./LoginScreen.module.css";
import TextField from "@material-ui/core/TextField";
import Link from "next/link";
const LoginScreen = () => {
  return (
    <div className={`${style.login_form}`}>
      <div className={`${style.login_form_container} col-sm-10 col-lg-8 col-xl-6`}>
        
        <form autoComplete="on">
          <TextField
            label="Email"
            fullWidth
            required
            type="email"
            variant="outlined"
          />
          <TextField
            label="Password"
            fullWidth
            required
            type="password"
            variant="outlined"
            className="mt-3"
          />
          <button className={`${style.login_button} btn btn-lg btn-block mt-5`}>
            Login
          </button>
        </form>
        <div className='mt-3'>

        <Link href={"/Forget_password"}>Forget Password</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
