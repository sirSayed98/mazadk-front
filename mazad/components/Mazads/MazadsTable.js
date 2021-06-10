import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { GetMazads, DeleteMazad } from "../../Redux/actions/mazadActions";
import { popUpMessage } from "../utils/sweetAlert";
import { TimeNow } from "../utils/GetCurrentTime";
import Link from "next/link";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function MazadsTable() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { Mazads } = useSelector((state) => state.Mazad);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const Delete = (id) => {
    dispatch(DeleteMazad(id))
      .then((el) => {
        dispatch(GetMazads());
        popUpMessage("Done", "Mazad has been deleted", "success");
      })
      .catch((error) => {
        popUpMessage("Failed", error, "error");
      });
  };

  useEffect(() => {
    dispatch(GetMazads());
  }, []);

  return (
    <TableContainer component={Paper} className="mt-3">
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {[
              "Mazad Name",
              "Merchant Email",
              "Start Date",
              "End Date",
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
          <>
            <TableCell align={"center"}></TableCell>
            <TableCell align={"center"}></TableCell>
            <TableCell align={"center"}></TableCell>
            <TableCell align={"center"}></TableCell>
            <TableCell align={"center"}></TableCell>
          </>
          {Mazads &&
            Mazads.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align={"center"}>{row.merchant.email}</TableCell>
                <TableCell align={"center"}>{row.start_time}</TableCell>
                <TableCell align={"center"}>{row.end_time}</TableCell>
                <TableCell align={"center"}>
                  {userInfo && userInfo.role == "merchant" && (
                    <Tooltip title="Edit">
                      <Link href={`/Edit_mazad/${row._id}`}>
                        <IconButton
                          disabled={TimeNow() > row.start_time}
                          aria-label="Edit"
                        >
                          <EditIcon
                            color={TimeNow() > row.start_time ? "" : "primary"}
                          />
                        </IconButton>
                      </Link>
                    </Tooltip>
                  )}

                  <Tooltip title="Delete">
                    <IconButton
                      onClick={() => Delete(row._id)}
                      aria-label="Accept"
                      disabled={TimeNow() > row.start_time}
                    >
                      <DeleteIcon
                        color={TimeNow() > row.start_time ? "" : "secondary"}
                      />
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
