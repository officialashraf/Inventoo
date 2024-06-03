import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/Header/MetaData";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonIcon from "@material-ui/icons/Person";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import SideBar from "./slideBar";
import { UPDATE_USER_RESET } from "../constant/userConstant";
import {
  getUserDetails,
  updateUser,
  clearErrors,
} from "../action/userAction";
import Loader from "../layout/Loader/loader";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate =useNavigate();
  const {id} = useParams();

  const { loading, error, user } = useSelector((state) => state.userDetails);

  const {
    loading: updateLoading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const userId = id;

  useEffect(() => {
    dispatch(getUserDetails(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    if (user && user._id === userId ) {
      setName(user.name || '');
      setEmail(user.email || '');
      setRole(user.role || '');
    }
  }, [user, userId]);
 
  
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error]);
  
  useEffect(() => {
    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, updateError]);
  
  useEffect(() => {
    if (isUpdated) {
      alert.success("User Updated Successfully");
      navigate("/admin/users");
      dispatch({ type: UPDATE_USER_RESET });
    }
  }, [dispatch, alert, isUpdated, navigate]);
  
  const updateUserSubmitHandler = (e) => {
    e.preventDefault();
  
    const myForm = new FormData();
  
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("role", role);
  
    dispatch(updateUser(userId, myForm));
  };

  return (
    <Fragment>
      <MetaData title="Update User" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          {loading ? (
            <Loader />
          ) : (
            <form
              className="createProductForm"
              onSubmit={updateUserSubmitHandler}
            >
              <h1>Update User</h1>

              <div>
                <PersonIcon />
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <MailOutlineIcon />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <VerifiedUserIcon />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Choose Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>

              <Button
                id="createProductBtn"
                type="submit"
                disabled={
                  updateLoading ? true : false || role === "" ? true : false
                }
              >
                Update
              </Button>
            </form>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateUser;