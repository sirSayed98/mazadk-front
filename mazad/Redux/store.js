import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegisterReducer,
  userListReducer,
  userDeleteReducer,
  userForgetPasswordReducer,
  userResetPasswordReducer
} from "./reducers/userReducer";
import Cookies from "js-cookie";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
  userDeleted: userDeleteReducer,
  userForget: userForgetPasswordReducer,
  userRest:userResetPasswordReducer
});

const userInfoFromStorage = Cookies.get("token")
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
