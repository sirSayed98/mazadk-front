import React, { useState } from "react";
import style from "./Navbar.module.css";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/actions/userAction";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    handleClose();
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

        {!userLogin.userInfo && (
          <div className={`${style.buttons_box}`}>
            <button className={`${style.register_button} btn btn_master`}>
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
        {userLogin.userInfo && (
          <div className={`${style.buttons_box}`}>
            <button
              onClick={handleLogout}
              className={`${style.login_button} btn btn_master`}
            >
              LOGOUT
            </button>
          </div>
        )}

        <div className={`${style.burger_menu}`}>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            style={{ color: "white" }}
            className="btn"
            startIcon={<MenuIcon style={{ color: "white", fontSize: 35 }} />}
          ></Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {!userLogin.userInfo && (
              <div>
                <MenuItem onClick={handleClose}>
                  {" "}
                  <Link as={`/Register`} href={`/Register`}>
                    Register
                  </Link>{" "}
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <Link as={`/Login`} href={`/Login`}>
                    LOGIN
                  </Link>
                </MenuItem>
              </div>
            )}

            {userLogin.userInfo && (
              <div>
                <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
              </div>
            )}
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Navbar;
