import axios from "axios";
import Cookies from "js-cookie";

import {
  CREATE_MAZAD,
  SINGLE_MAZAD,
  USER_CURRENT_MAZADS,
  CURRENT_MAZADS,
  USER_UP_COMING_MAZADS,
  UP_COMING_MAZADS,
  JOIN_MAZAD,
  BID_NOW,
  GET_MAZADS,
  INTEREST_MAZAD,
  GET_CONTACTS,
} from "../constants/mazadConstants/endPoints";
import {
  JOIN_MAZAD_SUCCESS,
  INTEREST_MAZAD_SUCCESS,
} from "../constants/userCosntants/types";

import {
  GET_MAZAD_SUCCESS,
  GET_MAZADS_SUCCESS,
  GET_HOME_AUCTION_NOW_SUCCESS,
  GET_HOME_AUCTION_UP_COMING_SUCCESS,
  GET_CONTACT_SUCCESS,
} from "../constants/mazadConstants/types";
export const CreateMazad = (data) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
      "Content-Type": "application/json",
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .post(CREATE_MAZAD, data, config)
      .then((res) => {
        resolve(res.data.data._id);
      })
      .catch((error) => {
        reject(
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response
        );
      });
  });
};

export const GetSingleMazad = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .get(SINGLE_MAZAD + `/${id}`, config)
      .then((res) => {
        resolve(res.data.data);
        dispatch({
          type: GET_MAZAD_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        reject(
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response
        );
      });
  });
};

export const EditMazad = (id, data) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
      "Content-Type": "application/json",
    },
  };
  return new Promise((resolve, reject) => {
    axios
      .put(SINGLE_MAZAD + `/${id}`, data, config)
      .then((res) => {
        resolve(res.data.data);
        dispatch({
          type: GET_MAZAD_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        reject(
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response
        );
      });
  });
};

export const HomeCurrentMazads = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: Cookies.get("token")
        ? `Bearer ${Cookies.get("token")}`
        : "",
      "Content-Type": "application/json",
    },
  };

  const endpoint = Cookies.get("token") ? USER_CURRENT_MAZADS : CURRENT_MAZADS;

  return new Promise((resolve, reject) => {
    axios
      .get(endpoint, config)
      .then((res) => {
        resolve(res.data.data);
        console.log(res.data.data);
        dispatch({
          type: GET_HOME_AUCTION_NOW_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        reject(
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response
        );
      });
  });
};

export const HomeUpComingMazads = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: Cookies.get("token")
        ? `Bearer ${Cookies.get("token")}`
        : "",
      "Content-Type": "application/json",
    },
  };

  const endpoint = Cookies.get("token")
    ? USER_UP_COMING_MAZADS
    : UP_COMING_MAZADS;

  return new Promise((resolve, reject) => {
    axios
      .get(endpoint, config)
      .then((res) => {
        resolve(res.data.data);
        console.log(res.data.data);
        dispatch({
          type: GET_HOME_AUCTION_UP_COMING_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        reject(
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response
        );
      });
  });
};

export const JoinMazad = (id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
      "Content-Type": "application/json",
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .post(JOIN_MAZAD + `/${id}`, {}, config)
      .then((res) => {
        resolve(res.data.data);
        dispatch({
          type: JOIN_MAZAD_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        reject(
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response
        );
      });
  });
};

export const InterestMazad = (id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
      "Content-Type": "application/json",
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .post(INTEREST_MAZAD + `/${id}`, {}, config)
      .then((res) => {
        resolve("done");
        dispatch({
          type: INTEREST_MAZAD_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        reject(
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response
        );
      });
  });
};

export const BidNow = (id, newVal) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
      "Content-Type": "application/json",
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .post(BID_NOW + `/${id}`, { newVal }, config)
      .then((res) => {
        resolve(res.data.data);
        dispatch({
          type: GET_MAZAD_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_MAZAD_SUCCESS,
          payload: error.response.data.data,
        });
        reject(
          error.response && error.response.data.Message
            ? error.response.data.Message
            : error.response
        );
      });
  });
};

export const GetMazads = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
      "Content-Type": "application/json",
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .get(GET_MAZADS, config)
      .then((res) => {
        console.log(res.data.data);
        dispatch({
          type: GET_MAZADS_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        reject(
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response
        );
      });
  });
};

export const DeleteMazad = (id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
      "Content-Type": "application/json",
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .delete(SINGLE_MAZAD + `/${id}`, config)
      .then((res) => {
        console.log(res.data.data);
        resolve("done");
      })
      .catch((error) => {
        reject(
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response
        );
      });
  });
};

export const getContact = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
      "Content-Type": "application/json",
    },
  };
  return new Promise((resolve, reject) => {
    axios
      .get(GET_CONTACTS, config)
      .then((res) => {
        dispatch({
          type: GET_CONTACT_SUCCESS,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        reject(
          error.response && error.response.data.error
            ? error.response.data.error
            : error.response
        );
      });
  });
};
