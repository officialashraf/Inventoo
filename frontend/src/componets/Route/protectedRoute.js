import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Loader from "../layout/Loader/loader"

const ProtectedRoute = (props, isAdmin ) => {
const {Component }= props

const navigate = useNavigate()
   const{loading, isAuthenticated, user} = useSelector((state) => state.user);
   useEffect(() => {
    if(isAuthenticated === false){
      navigate("/login")
    }
    if(isAdmin === true && user.role !== "admin"){
      navigate("/login")
    }
   })
  return (
    <>
    {loading ? (<Loader/>): (
    
    <Component/>)}
    </>
  )
}

export default ProtectedRoute