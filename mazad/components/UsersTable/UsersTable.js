import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUserList, DeleteUser } from "../../Redux/actions/userAction";

import { confirmedMessage, popUpMessage } from "../utils/sweetAlert";

import UserModal from "../../components/UserModal/userModal";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const [child, setChild] = useState(false);
  const classes = useRowStyles();

  const dispatch = useDispatch();
  const userDeletedDone = useSelector((state) => state.userDeleted);
  const { success, error, loading } = userDeletedDone;

  const handleDelete = (id) => {
    confirmedMessage().then((result) => {
      if (result.isConfirmed) {
        dispatch(DeleteUser(id));
      }
    });
  };

  const toggleChildMenu = () => {
    setChild(!child);
  };

  useEffect(() => {
    if (success) {
      popUpMessage("Done", "operation is complete", "success");
    }
    if (error) {
      popUpMessage("Failed", error, "error");
    }
  }, [success, error]);

  return (
    <>
      <UserModal open={child} />
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.email}
        </TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">{row.role}</TableCell>
        <TableCell align="right">{row.phone}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                More
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Address</TableCell>
                    <TableCell align="center">Created_AT</TableCell>
                    <TableCell align="center">Options</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={row.name}>
                    <TableCell align="center" component="th" scope="row">
                      {row.address}
                    </TableCell>
                    <TableCell align="center">{row.createdAt}</TableCell>
                    <TableCell className="mr-2" align="center">
                      <DeleteIcon
                        onClick={() => handleDelete(row._id)}
                        className="mr-2"
                      ></DeleteIcon>
                      <EditIcon onClick={toggleChildMenu}></EditIcon>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function CollapsibleTable() {
  const dispatch = useDispatch();

  const userListData = useSelector((state) => state.userList);
  const { userList, userFilterList } = userListData;

  useEffect(() => {
    dispatch(GetUserList());
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Email</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Role</TableCell>
              <TableCell align="right">Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList &&
              userFilterList === undefined &&
              userList.map((row) => <Row key={row.name} row={row} />)}

            {userFilterList !== undefined &&
              userFilterList !== null &&
              userFilterList.map((row) => <Row key={row.name} row={row} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};
