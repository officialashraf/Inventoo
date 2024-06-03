import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors, forgotPassword} from "../action/userAction";
import "../User/loginSignup.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import Loader from "../layout/Loader/loader"
import MetaData from "../layout/Header/MetaData";
const ForgotPassword = () => {
 
  const dispatch = useDispatch();
  const alert = useAlert();

  
  const { error, loading, message } = useSelector(
    (state) => state.forgotPassword
  );

  
  const [email, setEmail] = useState("");
 


  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
   
    dispatch(forgotPassword(myForm))
  };

 

  useEffect(() => {
   
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (message) {
     alert.success(message);
     
    }
  }, [dispatch, error, alert, message]);
  return (
    <>
    {loading ? (<Loader/>):
   (
     <>
      <MetaData title="Forgot Password" />
   <div className="LoginSignUpContainer">
      <div className="LoginSignUpBox" >
        <h2 className="headings">Forgot Password</h2>
         <form
className="loginForm"
               onSubmit={forgotPasswordSubmit}>
                  <div className="loginPassword">
                   <MailOutlineIcon />
                   <input
                     type="email"
                     placeholder="Enter Your Email"
                     required
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                   />
                 </div>
                 
                 
                 <input type="submit" value="Send" className="signUpBtn" />
               </form>
             </div>
             </div>
    </>
   )}
    </>
  )
}

export default ForgotPassword
