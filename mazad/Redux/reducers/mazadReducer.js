import {
  GET_MAZAD_SUCCESS,
  GET_MAZADS_SUCCESS,
  UPDATE_MAZAD_SUCCESS,
  GET_HOME_AUCTION_NOW_SUCCESS,
  GET_HOME_AUCTION_UP_COMING_SUCCESS,
  GET_CONTACT_SUCCESS,
} from "../constants/mazadConstants/types";

export const MazadReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MAZAD_SUCCESS:
      return { ...state, singleMazad: action.payload };
    case UPDATE_MAZAD_SUCCESS:
      return { ...state, singleMazad: action.payload };
    case GET_HOME_AUCTION_NOW_SUCCESS:
      return { ...state, homeNowMazads: action.payload };
    case GET_HOME_AUCTION_UP_COMING_SUCCESS:
      return {
        ...state,
        homeUpComing: action.payload,
      };
    case GET_MAZADS_SUCCESS:
      return {
        ...state,
        Mazads: action.payload,
      };
    case GET_CONTACT_SUCCESS:
      return {
        ...state,
        Contacts: action.payload,
      };
    default:
      return state;
  }
};
