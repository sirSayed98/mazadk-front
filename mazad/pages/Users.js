import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import UsersTable from "../components/UsersTable/UsersTable";
import Navbar from "../components/Navbar/Navbar";
import UsersFilter from "../components/usersFilter/usersFilter";
import { Animated } from "react-animated-css";
const Users = () => {
  const router = useRouter();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (
      userInfo === null ||
      userInfo === undefined ||
      userInfo.role !== "admin"
    ) {
      router.push("/");
    }
  }, [userInfo, userLogin]);
  return (
    <>
      {
        <>
          <Navbar />
          <div className="container">
            {/* <UsersFilter /> */}
            <div className="col-sm-12 mt-4">
              <Animated
                animationIn="bounceInLeft"
                animationOut="fadeOut"
                isVisible={true}
              >
                <UsersTable />
              </Animated>
            </div>
          </div>
        </>
      }
    </>
  );
};

export default Users;
