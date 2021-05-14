import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import UserTabs from "./UserTabs";

import style from "./ProfileScreen.module.css";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [data, setData] = useState({
    name: "",
    phone: "",
    address: "",
    password: "",
  });
  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  useEffect(() => {
    if (userInfo === null) {
      router.push("/");
    }
    setData(userInfo);
  }, [userInfo]);

  return (
    <>
      <div className={`container`}>
        <div className={`${style.profileBody} mt-3 p-1`}>
          <div className={`row`}>
            <div className={`${style.userPicBox} col-sm-12 col-lg-4 `}>
              <div className={`${style.imgBox} mt-4 mb-3`}>
                <img
                  className={`${style.userImg}`}
                  src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"
                />
                <div className={`${style.editButton}`}>
                  <IconButton aria-label="Accept">
                    <EditIcon />
                  </IconButton>
                </div>
              </div>

              <form className="mt-5 container" autoComplete="on">
                <TextField
                  fullWidth
                  required
                  type="text"
                  // onChange={(e) => setEmail(e.target.value)}
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
                  value={data.name}
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
                  value={data.address}
                />
                <TextField
                  label="Phone"
                  fullWidth
                  required
                  type="text"
                  variant="outlined"
                  name="phone"
                  className="mt-3"
                  value={data.phone}
                  onChange={onChange}
                />
                <TextField
                  label="Password"
                  fullWidth
                  required
                  type="password"
                  variant="outlined"
                  name="password"
                  className="mt-3"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;
