import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import UsersTable from "../components/UsersTable/UsersTable";
import Navbar from "../components/Navbar/Navbar";

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
            <div className="col-sm-12 mt-4">
              <UsersTable />
            </div>
          </div>
        </>
      }
    </>
  );
};

export default Users;
