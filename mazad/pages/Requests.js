import React, { useEffect } from "react";
import RequestsTable from "../components/RequestsTable/RequestsTable";
import Navbar from "../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Requests = () => {
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
      <Navbar />
      <div className="container">
        <h3 className="display-4 mt-2 mb-2"> Requests</h3>
        <RequestsTable />
      </div>
    </>
  );
};

export default Requests;
