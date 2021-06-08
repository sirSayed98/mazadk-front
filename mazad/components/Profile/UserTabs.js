import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { RelativeDate } from "../utils/GetCurrentTime";

import style from "./ProfileScreen.module.css";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { GENERAL_HOST } from "../../Redux/constants/General";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  bc: { backgroundColor: "rgb(1, 7, 16)" },
}));

export default function UserTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  //const { myMazads, interested_mazads, wonMazads } ;
  const { userMazads } = useSelector((state) => state.MyMazads);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {userMazads && (
        <>
          <div className={classes.root}>
            <AppBar position="static">
              <Tabs
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
              >
                <LinkTab
                  className={classes.bc}
                  label="WON Mazads"
                  href="/drafts"
                  {...a11yProps(0)}
                />
                <LinkTab
                  className={classes.bc}
                  label="Interested Mazads"
                  href="/trash"
                  {...a11yProps(1)}
                />
                <LinkTab
                  className={classes.bc}
                  label="Subscribed Mazads"
                  href="/trash"
                  {...a11yProps(2)}
                />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              {userMazads.wonMazads &&
                userMazads.wonMazads.map((el) => {
                  return (
                    <ul key={el._id} className="list-group list-group-flush">
                      <li className="list-group-item">
                        <div className="row">
                          <div className="col d-flex justify-content-center">
                            <Typography>{el.name}</Typography>
                          </div>
                          <div className="col d-flex justify-content-center">
                            <Typography>
                              {el.end_time && RelativeDate(el.end_time)}
                            </Typography>
                          </div>
                          <div className="col d-flex justify-content-center">
                            <img
                              className={`${style.round_img}`}
                              src={GENERAL_HOST + el.photo}
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  );
                })}
            </TabPanel>

            <TabPanel value={value} index={1}>
              {userMazads.interested_mazads &&
                userMazads.interested_mazads.map((el) => {
                  return (
                    <ul key={el._id} className="list-group list-group-flush">
                      <li className="list-group-item">
                        <div className="row">
                          <div className="col d-flex justify-content-center">
                            <Typography>{el.name}</Typography>
                          </div>
                          <div className="col d-flex justify-content-center">
                            <Typography>
                              {el.start_time && RelativeDate(el.start_time)}
                            </Typography>
                          </div>
                          <div className="col d-flex justify-content-center">
                            <img
                              className={`${style.round_img}`}
                              src={GENERAL_HOST + el.photo}
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  );
                })}
            </TabPanel>

            <TabPanel value={value} index={2}>
              {userMazads.myMazads &&
                userMazads.myMazads.map((el) => {
                  return (
                    <ul key={el._id} className="list-group list-group-flush">
                      <Link href={`/mazad/${el._id}`}>
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col d-flex justify-content-center">
                              <Typography
                                style={{ textDecoration: "underline" }}
                              >
                                {el.name}
                              </Typography>
                            </div>
                            <div className="col d-flex justify-content-center">
                              <Typography>
                                {el.end_time && RelativeDate(el.end_time)}
                              </Typography>
                            </div>
                            <div className="col d-flex justify-content-center">
                              <img
                                className={`${style.round_img}`}
                                src={GENERAL_HOST + el.photo}
                              />
                            </div>
                          </div>
                        </li>
                      </Link>
                    </ul>
                  );
                })}
            </TabPanel>
          </div>
        </>
      )}
    </>
  );
}
