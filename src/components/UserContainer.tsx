import React, { useEffect } from "react";
import { UserStoreType } from "../redux/User/userReducer";
import { StoreType } from "../redux/store";
import { fetchUsers } from "../redux/User/userAction";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";

interface UserContainerProps {
  userData: UserStoreType;
  fetchUsers: () => void;
}

const UserContainer = ({ userData, fetchUsers }: UserContainerProps) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return (
    <div>
      <h2>Users List</h2>
      {userData.loading ? <div>Loading...</div> : null}
      {userData.users ? userData.users.map((user) => <p>{user.name}</p>) : null}
      {userData.error ? userData.error : ""}
    </div>
  );
};

const mapStatesToProps = (state: StoreType) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<StoreType, {}, any>) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(UserContainer);
