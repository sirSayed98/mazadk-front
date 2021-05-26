import React, { useEffect, useState } from "react";
import { GENERAL_HOST } from "../../Redux/constants/General";
import { useDispatch, useSelector } from "react-redux";
import { GetSingleMazad } from "../../Redux/actions/mazadActions";

import style from "./EditMazadScreen.module.css";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import { popUpMessage } from "../utils/sweetAlert";
import { UploadPhoto } from "../../Redux/actions/userAction";

const EditMazadScreen = ({ id }) => {
  const dispatch = useDispatch();
  const { singleMazad } = useSelector((state) => state.singleMazad);

  const [update, setUpdate] = useState(false);
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

  useEffect(() => {
    if (id !== undefined) {
      dispatch(GetSingleMazad(id));
    }
  }, []);

  return (
    <>
      {/* <button onClick={() => console.log(singleMazad._id)}>TEST</button> */}
      <div className={`container`}>
        <div className={`${style.mainBody}`}>
          <div className="row">
            <div
              className={`${style.mazadPhotoBox} col-sm-12 col-md-6 col-lg-4`}
            >
              {singleMazad && (
                <img
                  className={`${style.mazadPhoto}`}
                  src={
                    update
                      ? URL.createObjectURL(newMazadPic)
                      : GENERAL_HOST + singleMazad.photo
                  }
                  //src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
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
                className={`${style.editButton}`}
                onClick={() => document.getElementById("mazad_pic").click()}
              >
                <IconButton aria-label="Accept">
                  <EditIcon />
                </IconButton>
              </div>
            </div>
            <div
              className={`${style.mazadPhotoBox} col-sm-12 col-md-6 col-lg-8`}
            >
              <h3 className="display-3 text-center">Mazad Info</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditMazadScreen;
