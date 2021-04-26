import React from "react";
import Navbar from "../components/Navbar/Navbar";
import LoginScreen from "../components/login/LoginScreen";
const Login = ({ history }) => {
  return (
    <>
      <Navbar />
      <LoginScreen history={history} />
    
      
    </>
  );
};

export default Login;
