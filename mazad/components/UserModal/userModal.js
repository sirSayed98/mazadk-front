import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { EditUser } from "../../Redux/actions/userAction";

import "react-responsive-modal/styles.css";
import TextField from "@material-ui/core/TextField";
import { Modal } from "react-responsive-modal";

import { FILTER_USERS_TYPE } from "../../Redux/constants/userCosntants/types";

import Cookies from "js-cookie";

const userModal = (props) => {
  const [state, setState] = useState(false);
  const [user, setUser] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
  });

  const dispatch = useDispatch();

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  useEffect(() => {
    if (props.open === true) {
      setState(true);
      setUser(props.user);
    }
  }, [props.open]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(EditUser(user, props.user._id)).then((el) => {
      dispatch({
        type: FILTER_USERS_TYPE,
        payload: Cookies.get("filter"),
      });
    });
  };

  return (
    <>
      <Modal
        open={state}
        onClose={() => setState(false)}
        center
        classNames={{
          overlayAnimationIn: "customEnterOverlayAnimation",
          overlayAnimationOut: "customLeaveOverlayAnimation",
          modalAnimationIn: "customEnterModalAnimation",
          modalAnimationOut: "customLeaveModalAnimation",
        }}
        animationDuration={800}
      >
        <>
          <div className="container">
            <form className="mt-5" onSubmit={onSubmit}>
              <TextField
                label="Name"
                fullWidth
                required
                type="text"
                className="mb-3"
                variant="outlined"
                InputProps={{ inputProps: { minLength: 3, maxLength: 20 } }}
                name="name"
                value={user.name}
                onChange={onChange}
              />
              <TextField
                label="Phone"
                fullWidth
                required
                type="text"
                className="mb-3"
                variant="outlined"
                InputProps={{ inputProps: { minLength: 11, maxLength: 11 } }}
                name="phone"
                value={user.phone}
                onChange={onChange}
              />
              <TextField
                label="Address"
                fullWidth
                required
                type="text"
                className="mb-3"
                variant="outlined"
                InputProps={{ inputProps: { minLength: 10, maxLength: 50 } }}
                name="address"
                value={user.address}
                onChange={onChange}
              />
              <TextField
                label="Email"
                disabled
                fullWidth
                required
                type="email"
                className="mb-3"
                variant="outlined"
                InputProps={{ inputProps: { minLength: 5, maxLength: 50 } }}
                name="email"
                value={user.email}
                onChange={onChange}
              />

              <button className={`master_button btn btn-lg btn-block`}>
                Edit
              </button>
            </form>
          </div>
        </>
      </Modal>
    </>
  );
};

export default userModal;
