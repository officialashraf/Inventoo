import React from 'react'
import {Link} from "react-router-dom";
import "../Product/latestproduct.css"




const latestProduct = ({latestproduct}) => {
  return (
    <>
    
    <Link className='latestproductCart' to='/products'>
        <img src={latestproduct.images[0].url} alt={latestproduct.name}/>
        <p>{latestproduct.name}</p>
    </Link>
    
    </>
  )
}

export default latestProduct;