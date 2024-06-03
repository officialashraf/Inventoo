import React, { useState, useEffect } from "react";
import profileImg from "../User/imu.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadUser } from "../action/userAction";
import { UPDATE_PROFILE_RESET } from "../constant/userConstant";
import { useAlert } from "react-alert";
import { clearErrors, updateProfile} from "../action/userAction";
import "../User/loginSignup.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FaceIcon from "@material-ui/icons/Face";
import Loader from "../layout/Loader/loader"
import MetaData from "../layout/Header/MetaData";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { user } = useSelector(
    (state) => state.user
  );
  const { error, loading, isUpdated } = useSelector(
    (state) => state.profile
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState(profileImg);


  const updateProfileSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("avatar", avatar);
    dispatch(updateProfile(myForm))
  };

  const updateProfileDataChange = (e) => {
   
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    
  };

  useEffect(() => {
    if(user){
      setName(user.name);
      setEmail(user.email);
      setAvatar(user.avatar.url);

    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (isUpdated) {
     alert.success("Profile Update Successfully");
     dispatch(loadUser());
     navigate("/account");
     dispatch({
      type: UPDATE_PROFILE_RESET,
     })
    }
  }, [dispatch, error, alert, isUpdated, user, navigate ]);

  return (
   <>
   {loading ? (<Loader/>):
  (
    <>
  
     <MetaData title="Update Profile" />
  <div className="LoginSignUpContainer">
     <div className="LoginSignUpBox">
       <h2 className="headings">Update Profile</h2>
        <form
              className="loginForm"
              encType="multipart/form-data"
              onSubmit={updateProfileSubmit}>
                <div className="signUpName">
                  <FaceIcon />
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  />
                </div>
                <div className="signUpEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>

                <div id="registerImage">
                  <img src={avatarPreview} alt="Avatar Preview" />
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={updateProfileDataChange}
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

  
export default UpdateProfile



