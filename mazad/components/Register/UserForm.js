import React from "react";
import TextField from "@material-ui/core/TextField";
const UserForm = () => {
  return (
    <>
    
      <form autoComplete="on">
      <TextField
          label="Name"
          fullWidth
          required
          type="text"
          className='mb-3'
          variant="outlined"
        />
        <TextField
          label="Phone"
          fullWidth
          required
          type="text"
          className='mb-3'
          variant="outlined"
        />
        <TextField
          label="Address"
          fullWidth
          required
          type="text"
          className='mb-3'
          variant="outlined"
        />
        <TextField
          label="Email"
          fullWidth
          required
          type="email"
          className='mb-3'
          variant="outlined"
        />
        <TextField
          label="Password"
          fullWidth
          required
          type="password"
          className='mb-3'
          variant="outlined"
        />
         <TextField
          label="Confirm Password"
          fullWidth
          required
          type="password"
          className='mb-3'
          variant="outlined"
        />
        <button className={`master_button btn btn-lg btn-block`}>Register</button>
      </form>
    
    </>
  );
};

export default UserForm;
