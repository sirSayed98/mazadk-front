import React from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  FILTER_USERS_TYPE,
  REST_USER_FILTER,
} from "../../Redux/constants/userCosntants/types";

const UsersFilter = () => {
  const dispatch = useDispatch();
  const userFilter = useSelector((state) => state.userList);

  const handleFilter = (e) => {
    if (e.target.value === "all") {
      dispatch({
        type: REST_USER_FILTER,
      });
    } else {
      dispatch({
        type: FILTER_USERS_TYPE,
        payload: e.target.value,
      });
    }
  };

  return (
    <>
      <div className="col-lg-3 col-sm-6 mt-5">
        <div class="form-group">
          <label for="exampleFormControlSelect1">Filter</label>
          <select
            onChange={handleFilter}
            class="form-control"
            id="exampleFormControlSelect1"
          >
            <option value="all">ALL</option>
            <option value="merchant">Merchants</option>
            <option value="user">Users</option>
            <option value="admin">Admins</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default UsersFilter;
