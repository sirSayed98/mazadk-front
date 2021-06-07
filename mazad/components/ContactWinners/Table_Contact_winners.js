import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getContact } from "../../Redux/actions/mazadActions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Table_Contact_Winners = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const { Contacts } = useSelector((state) => state.Mazad);
  useEffect(() => {
    dispatch(getContact());
  }, []);
  return (
    <>
      
      <div className="container">
        <TableContainer component={Paper} className="mt-3">
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {[
                  "Mazad Name",
                  "Number of Bidders",
                  "End Time",
                  "Price",
                  "Name",
                  "Phone",
                  "Email",
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
                {Contacts &&
                  Contacts.map((el) => {
                    return (
                      <TableRow>
                        <TableCell align={"center"}>{el.name}</TableCell>
                        <TableCell align={"center"}>
                          {el.subscribers.length}
                        </TableCell>
                        <TableCell align={"center"}>{el.end_time}</TableCell>
                        <TableCell align={"center"}>
                          {el.current_price}
                        </TableCell>
                        <TableCell align={"center"}>{el.winner.name}</TableCell>
                        <TableCell align={"center"}>
                          {el.winner.phone}
                        </TableCell>
                        <TableCell align={"center"}>
                          {el.winner.email}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Table_Contact_Winners;
