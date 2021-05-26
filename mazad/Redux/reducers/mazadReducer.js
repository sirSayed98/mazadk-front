import {
  GET_MAZAD_SUCCESS,
  UPDATE_MAZAD_SUCCESS,
} from "../constants/mazadConstants/types";

export const SingleMazadReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MAZAD_SUCCESS:
      return { ...state, singleMazad: action.payload };
    case UPDATE_MAZAD_SUCCESS:
      return { ...state, singleMazad: action.payload };
    default:
      return state;
  }
};
