import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import { clearErrors, resetPassword} from "../action/userAction";
import "../User/loginSignup.css";
import Loader from "../layout/Loader/loader"
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import MetaData from "../layout/Header/MetaData";


const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const {token} = useParams();


  const { error, loading, success } = useSelector(
    (state) => state.forgotPassword
  );

  
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
 


  const updatePasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);
    dispatch(resetPassword(token, myForm))
  };

  
  useEffect(() => {
   
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (success) {
     alert.success("Password Update Successfully");
     navigate("/login");
    
    }
  }, [dispatch, error, alert, success, navigate ]);
  return (
    <>
    {loading ? (<Loader/>):
   (
     <>
      <MetaData title="Reset Password" />
   <div className="LoginSignUpContainer">
      <div className="LoginSignUpBox">
        <h2 className="headings">Reset Password</h2>
         <form
               className="loginForm"
              
               onSubmit={updatePasswordSubmit}>
                  
                 <div className="loginPassword">
                   <LockOpenIcon />
                   <input
                     type="password"
                     placeholder="New Password"
                     required
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
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
                 <input type="submit" value="Update" className="signUpBtn" />
               </form>
             </div>
             </div>
    </>
   )}
    </>
  )
}

export default ResetPassword
