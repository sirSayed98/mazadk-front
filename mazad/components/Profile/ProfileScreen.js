import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import UserTabs from "./UserTabs";
import AdminCards from "./AdminCards";
import MerchantCards from "./MerchantCards";

import style from "./ProfileScreen.module.css";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

import { popUpMessage } from "../utils/sweetAlert";
import { UpdateMe, UploadPhoto, getMe } from "../../Redux/actions/userAction";

import { GENERAL_HOST } from "../../Redux/constants/General";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [update, setUpdate] = useState(false);
  const [newProfile, setNewProfile] = useState("");

  const [data, setData] = useState({
    name: "",
    phone: "",
    address: "",
    password: "",
  });
  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateMe(data))
      .then((res) => {
        popUpMessage("Profile has been updated", "welcome again", "success");
      })
      .catch((err) => {
        popUpMessage("Failed", err, "error");
      });
  };

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    setNewProfile(file);
    setUpdate(true);
    const formData = new FormData();
    formData.append("image", file);
    dispatch(UploadPhoto(formData, "user"))
      .then((res) => {
        popUpMessage("Photo has been updated", "Awesome Pic", "success");
      })
      .catch((err) => {
        popUpMessage("Failed to Update", err, "Try Again!");
      });
  };
  useEffect(() => {
    if (userInfo === null) {
      router.push("/");
    }
    setData(userInfo);
  }, [userInfo]);

  useEffect(() => {
    dispatch(getMe());
  }, []);
  return (
    <>
      <div className={`container`}>
        <div className={`${style.profileBody} mt-3 p-1`}>
          <div className={`row`}>
            <div className={`${style.userPicBox} col-sm-12 col-lg-4 `}>
              <div className={`${style.imgBox} mt-4 mb-3`}>
                {userInfo && (
                  <img
                    alt="image"
                    className={`${style.userImg}`}
                    src={
                      update
                      ? URL.createObjectURL(newProfile)
                      : GENERAL_HOST + userInfo.photo
                    }
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://mazadk.vercel.app/default.png";
                    }}
                    onClick={() =>
                      document.getElementById("profile_pic").click()
                    }
                  />
                )}

                <input
                  type="file"
                  name="profile_pic"
                  id="profile_pic"
                  onChange={onChangeImage}
                  style={{ display: "none" }}
                />

                <div
                  className={`${style.editButton}`}
                  onClick={() => document.getElementById("profile_pic").click()}
                >
                  <IconButton aria-label="Accept">
                    <EditIcon />
                  </IconButton>
                </div>
              </div>

              <form
                onSubmit={onSubmit}
                className="mt-5 container"
                autoComplete="on"
              >
                <TextField
                  fullWidth
                  required
                  type="text"
                  variant="outlined"
                  name="role"
                  disabled={true}
                  value={userInfo && userInfo.role}
                />
                <TextField
                  fullWidth
                  required
                  type="email"
                  variant="outlined"
                  name="email"
                  disabled={true}
                  className="mt-3"
                  value={userInfo && userInfo.email}
                />
                <TextField
                  label="Name"
                  fullWidth
                  required
                  type="text"
                  variant="outlined"
                  name="name"
                  className="mt-3"
                  onChange={onChange}
                  value={data && data.name}
                />

                <TextField
                  label="Address"
                  fullWidth
                  required
                  type="text"
                  variant="outlined"
                  name="address"
                  className="mt-3"
                  onChange={onChange}
                  value={data && data.address}
                />
                <TextField
                  label="Phone"
                  fullWidth
                  required
                  type="text"
                  variant="outlined"
                  name="phone"
                  className="mt-3"
                  value={data && data.phone}
                  onChange={onChange}
                />
                <TextField
                  label="Password"
                  required
                  fullWidth
                  type="password"
                  variant="outlined"
                  name="password"
                  InputProps={{ inputProps: { minLength: 8, maxLength: 25 } }}
                  className="mt-3"
                  onChange={onChange}
                />
                <button
                  className={`master_button btn btn-lg mt-3 mb-5 btn-block`}
                >
                  Edit
                </button>
              </form>
            </div>

            <hr />
            <div className={`${style.userData} col-sm-12 col-lg-8`}>
              {userInfo && userInfo.role === "user" && (
                <div className="mt-5 container">
                  <UserTabs id={userInfo._id} />
                </div>
              )}
              {userInfo && userInfo.role === "admin" && (
                <div className="mt-5 container">
                  <AdminCards />
                </div>
              )}
              {userInfo && userInfo.role === "merchant" && (
                <div className="mt-5 container">
                  <MerchantCards />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;
