import React, { useState, useEffect } from "react";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import TextField from "@material-ui/core/TextField";

const userModal = (props) => {
  const [state, setState] = useState(false);
  const onChange = () => {};

  useEffect(() => {
    if (props.open === true) {
      setState(true);
    }
  }, [props.open]);

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
            <form className="mt-5">
              <TextField
                label="Name"
                fullWidth
                required
                type="text"
                className="mb-3"
                variant="outlined"
                InputProps={{ inputProps: { minLength: 3, maxLength: 20 } }}
                name="name"
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
                onChange={onChange}
              />
              <TextField
                label="Email"
                fullWidth
                required
                type="email"
                className="mb-3"
                variant="outlined"
                InputProps={{ inputProps: { minLength: 5, maxLength: 50 } }}
                name="email"
                onChange={onChange}
              />

              <button className={`master_button btn btn-lg btn-block`}>
                Register
              </button>
            </form>
          </div>
        </>
      </Modal>
    </>
  );
};

export default userModal;
