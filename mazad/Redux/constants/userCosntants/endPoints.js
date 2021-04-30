import { GENERAL_HOST, LOCAL_HOST } from "../General";
export const USER_LOGIN = LOCAL_HOST + "/api/v1/auth/login";
export const USER_REGISTER = GENERAL_HOST + "/api/v1/auth/register";
export const USER_LIST = LOCAL_HOST + "/api/v1/users";
export const FORGET_PASSWORD = GENERAL_HOST + "/api/v1/auth/forgetpassword";
export const RESET_PASSWORD = GENERAL_HOST + "/api/v1/auth/resetpassword";
export const EDIT_USER = LOCAL_HOST + "/api/v1/users";
