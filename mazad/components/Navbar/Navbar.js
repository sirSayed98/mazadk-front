import React, { useState } from "react";
import style from "./Navbar.module.css";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

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
          <span> MAZADK</span>
        </div>

        <div className={`${style.buttons_box}`}>
          <button className={`${style.register_button} btn btn_master`}>
            Register
          </button>
          <button className={`${style.login_button} btn btn_master`}>
            Login
          </button>
        </div>

        <div className={`${style.burger_menu}`}>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            style={{ color: "white"}}
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
              <MenuItem onClick={handleClose}>REGISTER</MenuItem>
              <MenuItem onClick={handleClose}>LOGIN</MenuItem>
            </div>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Navbar;
