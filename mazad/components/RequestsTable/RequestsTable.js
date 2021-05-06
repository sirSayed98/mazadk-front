import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { MerchantGetRequests } from "../../Redux/actions/userAction";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function RequestsTable() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const requestList = useSelector((state) => state.requestList);
  const { RequestList, loading, error } = requestList;

  useEffect(() => {
    dispatch(MerchantGetRequests());
  }, []);
  return (
    <TableContainer component={Paper} className="mt-3">
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {[
              "Company Name",
              "Email",
              "Phone",
              "Describtion",
              "Operations",
            ].map((el) => {
              return (
                <>
                  <TableCell align={"center"}>{el}</TableCell>
                </>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {RequestList &&
            RequestList.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row.companyName}
                </TableCell>

                <TableCell align={"center"}>{row.email}</TableCell>
                <TableCell align={"center"}>{row.phone}</TableCell>
                <TableCell align={"center"}>{row.describtion}</TableCell>
                <TableCell align={"center"}>
                  <Tooltip title="Reject">
                    <IconButton aria-label="Reject">
                      <ClearIcon color="secondary" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Accept">
                    <IconButton aria-label="Accept">
                      <DoneIcon color="primary" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
