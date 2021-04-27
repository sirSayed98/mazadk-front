import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import style from "./Navbar.module.css";

import SideMenu from "../SideMenu/SideMenu";
const Navbar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className={`${style.nav_container}`}>
        <div className={`${style.logo_box}`}>
          <span>
            <Link as={`/`} href={`/`}>
              MAZADK
            </Link>
          </span>
        </div>

        {!userInfo && (
          <div className={`${style.buttons_box}`}>
            <button className={`${style.register_button} btn btn_master mr-3`}>
              {" "}
              <Link as={`/Register`} href={`/Register`}>
                Register
              </Link>{" "}
            </button>
            <button className={`${style.login_button} btn btn_master`}>
              {" "}
              <Link as={`/Login`} href={`/Login`}>
                LOGIN
              </Link>{" "}
            </button>
          </div>
        )}
        {userInfo && (
          <>
            <div className={`${style.buttons_box}`}>
              <button
                onClick={handleLogout}
                className={`${style.login_button} btn btn_master`}
              >
                LOGOUT
              </button>
              <SideMenu />
            </div>
          </>
        )}

        <div className={`${style.burger_menu}`}>
          <SideMenu />
        </div>
      </div>
    </>
  );
};

export default Navbar;
