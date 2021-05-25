import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { GetSingleMazad } from "../../Redux/actions/mazadActions";
import style from "./EditMazadScreen.module.css";

const EditMazadScreen = ({ id }) => {
  const dispatch = useDispatch();
  const { singleMazad } = useSelector((state) => state.singleMazad);

  useEffect(() => {
    if (id !== undefined) {
      dispatch(GetSingleMazad(id));
    }
  }, []);
  return (
    <>
      {/* <button onClick={() => console.log(singleMazad)}>TEST</button> */}
      <div className={`container`}>
        <div className={`${style.mainBody}`}>
          <div className="row">
            <div
              className={`${style.mazadPhotoBox} col-sm-12 col-md-6 col-lg-4`}
            >
              <img
                className={`${style.mazadPhoto}`}
                src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              ></img>
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
