import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UPDATE_PASSWORD_RESET } from "../constant/userConstant";
import { useAlert } from "react-alert";
import { clearErrors, updatePassword} from "../action/userAction";
import "../User/loginSignup.css";
import Loader from "../layout/Loader/loader"
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import MetaData from "../layout/Header/MetaData";


const UpdatePassword = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();


  const { error, loading, isUpdated } = useSelector(
    (state) => state.profile
  );

  const [oldPassword, setoldPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
 


  const updatePasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("oldPassword", oldPassword);
    myForm.set("newPassword", newPassword);
    myForm.set("confirmPassword", confirmPassword);
    dispatch(updatePassword(myForm))
  };

  
  useEffect(() => {
   
    if (error) {
      alert.success(error);
      dispatch(clearErrors());
    }
    if (isUpdated) {
     alert.success("Password Update Successfully");
     navigate("/account");
     dispatch({
      type: UPDATE_PASSWORD_RESET
     })
    }
  }, [dispatch, error, alert, isUpdated, navigate ]);

  return (
    <>
   {loading ? (<Loader/>):
  (
    <>
     <MetaData title="Update Password" />
  <div className="LoginSignUpContainer">
     <div className="LoginSignUpBox">
       <h2 className="headings">Update Profile</h2>
        <form
              className="loginForm"
             
              onSubmit={updatePasswordSubmit}>
                 <div className="loginPassword">
                  <VpnKeyIcon />
                  <input
                    type="password"
                    placeholder="Old Password"
                    required
                    value={oldPassword}
                    onChange={(e) => setoldPassword(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="New Password"
                    required
                    value={newPassword}
                    onChange={(e) => setnewPassword(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  <LockIcon />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setconfirmPassword(e.target.value)}
                  />
                </div>
                <input type="submit" value="Change" className="signUpBtn" />
              </form>
            </div>
            </div>
   </>
  )}
   </>
  )
}

export default UpdatePassword
