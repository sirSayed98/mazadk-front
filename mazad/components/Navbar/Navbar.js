import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { logout } from "../../Redux/actions/userAction";

import style from "./Navbar.module.css";
import SideMenu from "../SideMenu/SideMenu";
const Navbar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
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
            <Link as={`/Register`} href={`/Register`}>
              <button
                className={`${style.register_button} btn btn_master mr-3`}
              >
                {" "}
                Register
              </button>
            </Link>
            <Link as={`/Login`} href={`/Login`}>
              <button className={`${style.login_button} btn btn_master`}>
                {" "}
                LOGIN
              </button>
            </Link>
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
