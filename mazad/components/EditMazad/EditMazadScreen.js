import React, { useEffect, useState } from "react";
import { GENERAL_HOST } from "../../Redux/constants/General";
import { useDispatch, useSelector } from "react-redux";
import { GetSingleMazad, EditMazad } from "../../Redux/actions/mazadActions";

import style from "./EditMazadScreen.module.css";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import { popUpMessage } from "../utils/sweetAlert";
import { UploadPhoto } from "../../Redux/actions/userAction";
import { TimeNow } from "../utils/GetCurrentTime";

const EditMazadScreen = ({ id }) => {
  const dispatch = useDispatch();
  const { singleMazad } = useSelector((state) => state.Mazad);

  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newMazadPic, setNewMazadPic] = useState("");

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    setNewMazadPic(file);
    setUpdate(true);
    const formData = new FormData();

    formData.append("image", file);
    formData.append("id", singleMazad._id);

    dispatch(UploadPhoto(formData, "mazad"))
      .then((res) => {
        popUpMessage("Photo has been updated", "Awesome Pic", "success");
      })
      .catch((err) => {
        popUpMessage("Failed to Update", err, "Try Again!");
      });
  };

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
  const [data, setData] = useState({
    name: "",
    describtion: "",
    start_price: 0,
    market_price: 0,
    expected_price: 0,
    increased_value: 0,
    start_time: 0,
    end_time: 0,
  });

  const onSubmit = (e) => {
    var current_time = TimeNow();
    e.preventDefault();
    if (data.start_time < current_time) {
      popUpMessage(
        "Start Time Less than Current Time",
        "increase start time",
        "error"
      );
    } else if (data.end_time < current_time) {
      popUpMessage(
        "End Time Less than Current Time",
        "increase start time",
        "error"
      );
    } else if (data.start_time > data.end_time) {
      popUpMessage(
        "End Time less than Start Time",
        "increase end time",
        "error"
      );
    } else {
      setLoading(true);
      dispatch(EditMazad(singleMazad._id, data))
        .then((res) => {
          setLoading(false);
          popUpMessage("Done!", "Success Updating Mazad", "success");
        })
        .catch((err) => {
          setLoading(false);
          popUpMessage("Cannot update Mazad now", err, "error");
        });
    }
  };

  useEffect(() => {
    if (id !== undefined) {
      dispatch(GetSingleMazad(id)).then((res) => {
        setData(res);
      });
    }
  }, []);

  return (
    <>
      {/* <button onClick={() => console.log(singleMazad)}>TEST</button> */}
      <div className={`container`}>
        <div className={`${style.mainBody}`}>
          <div className="row">
            <div
              className={`${style.mazadPhotoBox} col-sm-12 col-md-6 col-lg-5`}
            >
              {singleMazad && (
                <img
                  className={`${style.mazadPhoto}`}
                  src={
                    update
                      ? URL.createObjectURL(newMazadPic)
                      : GENERAL_HOST + singleMazad.photo
                  }
                ></img>
              )}
              <input
                type="file"
                name="mazad_pic"
                id="mazad_pic"
                onChange={onChangeImage}
                style={{ display: "none" }}
              />

              <div
                className="d-flex justify-content-center mt-4"
                onClick={() => document.getElementById("mazad_pic").click()}
              >
                <button className="btn btn-lg master_button">Edit Image</button>
              </div>
              <div className="mt-5">
                {singleMazad && (
                  <ul className="list-group list-group-flush">
                    {[
                      {
                        attribute: "Subscribers",
                        value: singleMazad.subscribers.length,
                      },
                      {
                        attribute: "Interested Subscribers",
                        value: singleMazad.interested_subscribers.length,
                      },
                    ].map((el) => {
                      return (
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                          {el.attribute}
                          <span className="badge badge-dark badge-pill">
                            {el.value}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
            <div
              className={`${style.mazadPhotoBox} col-sm-12 col-md-6 col-lg-7`}
            >
              <form onSubmit={onSubmit} className="mt-4">
                <h3 className="display-3 text-center mb-5">Mazad Info</h3>
                <TextField
                  label="Name"
                  fullWidth
                  required
                  type="text"
                  className="mb-3"
                  variant="outlined"
                  InputProps={{ inputProps: { minLength: 3, maxLength: 30 } }}
                  name="name"
                  disabled={TimeNow() > data.start_time}
                  value={data && data.name}
                  onChange={onChange}
                />
                <TextField
                  label="Describtion"
                  fullWidth
                  required
                  type="text"
                  className="mb-3"
                  variant="outlined"
                  InputProps={{ inputProps: { minLength: 8, maxLength: 50 } }}
                  name="describtion"
                  onChange={onChange}
                  disabled={TimeNow() > data.start_time}
                  value={data && data.describtion}
                />
                <TextField
                  label="Start Price"
                  fullWidth
                  required
                  type="number"
                  className="mb-3"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">L.E</InputAdornment>
                    ),
                  }}
                  name="start_price"
                  onChange={onChange}
                  disabled={TimeNow() > data.start_time}
                  value={data && data.start_price}
                />
                <TextField
                  label="Market Price"
                  fullWidth
                  required
                  type="number"
                  className="mb-3"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">L.E</InputAdornment>
                    ),
                  }}
                  name="market_price"
                  onChange={onChange}
                  disabled={TimeNow() > data.start_time}
                  value={data && data.market_price}
                />
                <TextField
                  label="Increasing Value"
                  fullWidth
                  required
                  type="number"
                  className="mb-3"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">L.E</InputAdornment>
                    ),
                  }}
                  name="increased_value"
                  onChange={onChange}
                  value={data && data.increased_value}
                  disabled={TimeNow() > data.start_time}
                />
                <TextField
                  label="Expected Price"
                  fullWidth
                  required
                  type="number"
                  className="mb-3"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">L.E</InputAdornment>
                    ),
                  }}
                  name="expected_price"
                  onChange={onChange}
                  disabled={TimeNow() > data.start_time}
                  value={data && data.expected_price}
                />
                <TextField
                  required
                  fullWidth
                  label="Start At"
                  type="datetime-local"
                  className="mb-3"
                  name="start_time"
                  onChange={onChange}
                  disabled={TimeNow() > data.start_time}
                  value={data && data.start_time}
                />
                <TextField
                  required
                  fullWidth
                  label="End At"
                  type="datetime-local"
                  className="mb-5"
                  name="end_time"
                  onChange={onChange}
                  disabled={TimeNow() > data.start_time}
                  value={data && data.end_time}
                />
                <div className="d-flex justify-content-center">
                  <button
                    disabled={loading || TimeNow() > data.start_time}
                    className={`master_button btn btn-lg btn-block mb-5`}
                  >
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditMazadScreen;
