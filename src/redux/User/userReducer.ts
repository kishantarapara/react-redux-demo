import { eventType } from "..";
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userTypes";

export interface UserStoreType {
  loading: boolean;
  users: any[];
  error: string;
}

const initialState: UserStoreType = {
  loading: false,
  users: [],
  error: "",
};

const userReducer = (
  state: UserStoreType = initialState,
  action: eventType
): UserStoreType => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };

    case FETCH_USER_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
