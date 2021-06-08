import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userLoginReducer,
  userRegisterReducer,
  userListReducer,
  userDeleteReducer,
  userForgetPasswordReducer,
  userResetPasswordReducer,
  merchantRegisterReducer,
  requestListReducer,
  userMazadsReducer,
} from "./reducers/userReducer";
import { MazadReducer } from "./reducers/mazadReducer";

import Cookies from "js-cookie";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
  userDeleted: userDeleteReducer,
  userForget: userForgetPasswordReducer,
  userRest: userResetPasswordReducer,
  merchantRequest: merchantRegisterReducer,
  requestList: requestListReducer,
  Mazad: MazadReducer,
  MyMazads: userMazadsReducer,
});

const userInfoFromStorage =
  Cookies.get("token") && Cookies.get("userInfo")
    ? JSON.parse(Cookies.get("userInfo"))
    : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
