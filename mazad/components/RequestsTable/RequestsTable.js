import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  DealRequests,
  MerchantGetRequests,
} from "../../Redux/actions/userAction";
import { popUpMessage } from "../utils/sweetAlert";

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

export default function RequestsTable() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const requestList = useSelector((state) => state.requestList);
  const { RequestList, loading, error } = requestList;

  const handleAction = (id, decision) => {
    dispatch(DealRequests(id, { accepted: decision }))
      .then((el) => {
        dispatch(MerchantGetRequests());
        popUpMessage("Done", "New Merchant Created", "success");
      })
      .catch((error) => {
        popUpMessage("Failed", error, "error");
      });
  };
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
            RequestList.map(
              (row) =>
                !row.checked && (
                  <TableRow key={row._id}>
                    <TableCell component="th" scope="row">
                      {row.companyName}
                    </TableCell>

                    <TableCell align={"center"}>{row.email}</TableCell>
                    <TableCell align={"center"}>{row.phone}</TableCell>
                    <TableCell align={"center"}>{row.describtion}</TableCell>
                    <TableCell align={"center"}>
                      <Tooltip title="Reject">
                        <IconButton
                          onClick={() => handleAction(row._id, false)}
                          aria-label="Reject"
                        >
                          <ClearIcon color="secondary" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Accept">
                        <IconButton
                          onClick={() => handleAction(row._id, true)}
                          aria-label="Accept"
                        >
                          <DoneIcon color="primary" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                )
            )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
