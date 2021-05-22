import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_RESET,
  REST_USER_FLAGS,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_REGISTER_REST,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  REMOVE_USER,
  REST_USER_FILTER,
  FILTER_USERS_TYPE,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_FAIL,
  FORGET_PASSWORD_REQUEST,
  FORGET_PASSWORD_RESET,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_RESET,
  RESET_DELETE_USER,
  EDIT_USER_SUCCESS,
  MERCHANT_REGISTER_FAIL,
  MERCHANT_REGISTER_REQUEST,
  MERCHANT_REGISTER_SUCCESS,
  MERCHANT_REGISTER_REST,
  MERCHANT_GET_REQUESTS_REQUEST,
  MERCHANT_GET_REQUESTS_SUCCESS,
  MERCHANT_GET_REQUESTS_FAIL,
  UPDAT_ME_SUCCESS
} from "../constants/userCosntants/types";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload, success: true };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    case REST_USER_FLAGS:
      return { ...state, loading: false, success: null, error: null };
    case UPDAT_ME_SUCCESS:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};
export const userRegisterReducer = (
  state = { error: false, success: false },
  action
) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload, success: true };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case USER_REGISTER_REST:
      return { loading: null, error: null, success: null };
    default:
      return state;
  }
};
export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case USER_DETAILS_RESET:
      return { user: {} };

    default:
      return state;
  }
};

export const userListReducer = (state = { userFilterList: null }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true };
    case USER_LIST_SUCCESS:
      return { loading: false, userList: action.payload, success: true };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload, success: false };
    case REMOVE_USER:
      return {
        ...state,
        userList:
          state.userList &&
          state.userList.filter((user) => user._id !== action.payload),
      };
    case FILTER_USERS_TYPE:
      var users = [];
      state.userList.map((user) => {
        if (user.role === action.payload) {
          users.push(user);
        }
      });
      return {
        ...state,
        userFilterList: users,
      };
    case REST_USER_FILTER:
      return {
        ...state,
        userFilterList: undefined,
      };
    case EDIT_USER_SUCCESS:
      return {
        loading: false,
        success: true,
        userList: state.userList.map((user) =>
          user._id === action.payload._id ? action.payload : user
        ),
      };
    default:
      return state;
  }
};

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return { loading: true };
    case DELETE_USER_SUCCESS:
      return { loading: false, success: true };
    case DELETE_USER_FAIL:
      return { loading: false, error: action.payload, success: false };
    case RESET_DELETE_USER:
      return {};
    default:
      return state;
  }
};

export const userForgetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case FORGET_PASSWORD_REQUEST:
      return { loading: true };
    case FORGET_PASSWORD_SUCCESS:
      return { loading: false, success: true };
    case FORGET_PASSWORD_FAIL:
      return { loading: false, error: action.payload, success: false };
    case FORGET_PASSWORD_RESET:
      return {};
    default:
      return state;
  }
};

export const userResetPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return { loading: true };
    case RESET_PASSWORD_SUCCESS:
      return { loading: false, success: true };
    case RESET_PASSWORD_FAIL:
      return { loading: false, error: action.payload, success: false };
    case RESET_PASSWORD_RESET:
      return {};
    default:
      return state;
  }
};

export const merchantRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case MERCHANT_REGISTER_REQUEST:
      return { loading: true };
    case MERCHANT_REGISTER_SUCCESS:
      return { loading: false, success: true };
    case MERCHANT_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case MERCHANT_REGISTER_REST:
      return {};
    default:
      return state;
  }
};

export const requestListReducer = (state = {}, action) => {
  switch (action.type) {
    case MERCHANT_GET_REQUESTS_REQUEST:
      return { loading: true };
    case MERCHANT_GET_REQUESTS_SUCCESS:
      return { loading: false, RequestList: action.payload, success: true };
    case MERCHANT_GET_REQUESTS_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
