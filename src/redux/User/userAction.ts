import { AnyAction, Dispatch } from "redux";
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./userTypes";
import axios from "axios";
import { ThunkDispatch } from "redux-thunk";
import { UserStoreType } from "./userReducer";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserRequestSuccess = (users: any[]) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUserRequestFailed = (error: string) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch: ThunkDispatch<UserStoreType, {}, AnyAction>) => {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data;
        dispatch(fetchUserRequestSuccess(data));
      })
      .catch((err) => {
        const errorMessage = err.message;
        dispatch(fetchUserRequestFailed(errorMessage));
      });
  };
};
