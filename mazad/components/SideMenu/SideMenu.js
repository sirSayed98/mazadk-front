import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/actions/userAction";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import HelpIcon from "@material-ui/icons/Help";
import PersonIcon from '@material-ui/icons/Person';

import Link from "next/link";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {!userInfo && (
        <List>
          <ListItem button>
            <ListItemIcon>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText>
              <Link as={`/Register`} href={`/Register`}>
                Register
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText>
              <Link as={`/Login`} href={`/Login`}>
                Login
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      )}
      <Divider />

      {userInfo && userInfo.role === "admin" && (
        <>
          <List>
            <ListItem>
              <ListItemText
                className="text-center"
                primary={"Admin Dashboard"}
              />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <PeopleAltIcon />
              </ListItemIcon>
              <ListItemText>
                <Link as={`/Users`} href={`/Users`}>
                  Users
                </Link>
              </ListItemText>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText>
                <Link as={`/Requests`} href={`/Requests`}>
                  Requests
                </Link>
              </ListItemText>
            </ListItem>
          </List>
          <Divider />
        </>
      )}

      <Divider />
      {userInfo && (
        <>
          <List>
            <ListItem button>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText>
                <Link as={`/Profile`} href={`/Profile`}>
                  Profile
                </Link>
              </ListItemText>
            </ListItem>
          </List>
          <Divider />
          <List onClick={handleLogout}>
            <ListItem button>
              <ListItemIcon>
                <MeetingRoomIcon />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItem>
          </List>
        </>
      )}
    </div>
  );
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  //userInfo.role
  return (
    <div style={{ float: "right" }}>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={toggleDrawer(anchor, true)}
          >
            <MoreVertIcon style={{ color: "white" }} />
          </IconButton>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
