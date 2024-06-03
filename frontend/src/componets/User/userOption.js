import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {SpeedDial, SpeedDialAction} from "@material-ui/lab"
import Backdrop from "@material-ui/core/Backdrop";
import { Dashboard, ExitToApp, ListAlt, Person, ShoppingCart } from '@material-ui/icons';
import {logout} from "../action/userAction";
import { useAlert } from "react-alert";
import "./userOption.css";

const UserOption = ({user}) => {

  const { cartItems } = useSelector((state)=> state.cart)
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  const alert = useAlert();
 
   var Options = [
      {icon:<ListAlt/>, name:"Orders", func : orders},
      {icon:<Person/>, name:"Profile", func : account},
      {icon:<ShoppingCart style={{color: cartItems?.length>0 ? "tomato" : "unset"}}/>, name:`cart(${cartItems?.length})`, func : cart},
      {icon:<ExitToApp/>, name:"Logout", func : exitfunc}
    ]
   
    if(user.role ==="admin"){
      Options.unshift({icon:<Dashboard/>, name:"Dashboard", func : dashboard})
    }
    function dashboard(){
     navigate("/admin/dashboard");
    }

    function cart(){
      navigate("/cart");
     }

    function orders(){
      navigate("/orders")
    }
    function account(){
      navigate("/account")
    }

   
    function exitfunc(){
      alert.success("Logout User Sucssesfully")
      dispatch(logout())
     }
  
    
  return (
    <>
    <Backdrop className='backdrop' open={open} style={{zIndex:10}}/>
    <SpeedDial
    ariaLabel="Speed from Dial"
    onClose ={()=> setOpen(false)}
    onOpen ={()=> setOpen(true)}
    open={open} 
   direction="down"
   className='speedDial'
    icon={
        <img className='speedDialIcon' src={user.avatar.url} alt='Profile'/>
    }>
     {Options.map((item)=>
      <SpeedDialAction key={item.name} icon={item.icon} tooltipTitle={item.name} onClick={item.func} tooltipOpen={window.innerWidth<=600? true:false} ></SpeedDialAction>
     )}
    
    </SpeedDial>
    </>
  )
}

export default UserOption