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
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import GavelIcon from "@material-ui/icons/Gavel";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";

import Link from "next/link";
import { useRouter } from "next/router";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const router = useRouter();
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
          <Link as={`/Register`} href={`/Register`}>
            <ListItem button>
              <ListItemIcon>
                <AddCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText>Register</ListItemText>
            </ListItem>
          </Link>

          <Link as={`/Login`} href={`/Login`}>
            <ListItem button>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText>Login</ListItemText>
            </ListItem>
          </Link>
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
            <Link as={`/Users`} href={`/Users`}>
              <ListItem button>
                <ListItemIcon>
                  <PeopleAltIcon />
                </ListItemIcon>
                <ListItemText>Users</ListItemText>
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List>
            <Link as={`/Requests`} href={`/Requests`}>
              <ListItem button>
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText>Requests</ListItemText>
              </ListItem>
            </Link>
          </List>
          <Divider />
        </>
      )}

      <Divider />
      {userInfo && userInfo.role === "merchant" && (
        <>
          <List>
            <ListItem>
              <ListItemText
                className="text-center"
                primary={"Merchant Dashboard"}
              />
            </ListItem>
          </List>
          <Divider />
        </>
      )}
      {userInfo && (
        <>
          <List>
            <Link as={`/Profile`} href={`/Profile`}>
              <ListItem button>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText>Profile</ListItemText>
              </ListItem>
            </Link>
          </List>
          <Divider />
        </>
      )}
      {userInfo && userInfo.role === "merchant" && (
        <>
          <Divider />
          <List>
            <Link as={`/Create_Mazad`} href={`/Create_Mazad`}>
              <ListItem button>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText>Create Mazad</ListItemText>
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List>
            <Link as={`/Contact_Winners`} href={`/Contact_Winners`}>
              <ListItem button>
                <ListItemIcon>
                  <PermContactCalendarIcon />
                </ListItemIcon>
                <ListItemText>Contact Winners</ListItemText>
              </ListItem>
            </Link>
          </List>
          <Divider />
        </>
      )}
      {userInfo && (userInfo.role === "merchant" || userInfo.role === "admin") && (
        <>
          <Divider />
          <List>
            <Link as={`/Mazads`} href={`/Mazads`}>
              <ListItem button>
                <ListItemIcon>
                  <GavelIcon />
                </ListItemIcon>
                <ListItemText>Mazads</ListItemText>
              </ListItem>
            </Link>
          </List>
          <Divider />
        </>
      )}

      {userInfo && (
        <>
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
    router.push("/");
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
