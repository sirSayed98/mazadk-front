import React from "react";

import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import {
  FILTER_USERS_TYPE,
  REST_USER_FILTER,
} from "../../Redux/constants/userCosntants/types";

const UsersFilter = () => {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    Cookies.set("filter", e.target.value);
    
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
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Filter</label>
          <select
            onChange={handleFilter}
            className="form-control"
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
