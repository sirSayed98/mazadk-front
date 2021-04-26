import React, { useState } from "react";
import style from "./Navbar.module.css";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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

        {Cookies.get("userInfo") && (
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
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Navbar;
