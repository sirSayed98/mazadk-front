import React from 'react'
import Link from "next/link";
import TextField from "@material-ui/core/TextField";

const MerchantForm = () => {
    return (
        <>
           
      <form autoComplete="on">
      <TextField
          label="Company Name"
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
          label="Email"
          fullWidth
          required
          type="email"
          className='mb-3'
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Describtion"
          multiline
          rows={4}
          className='mb-4'
          variant="outlined"
          fullWidth
        />
        <button className={`master_button btn btn-lg btn-block`}>Register</button>
      </form>
     
        </>
    )
}

export default MerchantForm
