import React from 'react'
import {Link} from "react-router-dom";
import { Rating } from "@material-ui/lab";
import "../../Home/home.css"
import "../Product/product.css"



const ProductCart = ({product}) => {
  const options = {
    
    value: product.ratings,
    readOnly :true,
    precision : 0.5,
    
    
};
  return (
    <>
    <Link className='productCart' to={`/product/${product._id}`}>
        <img src={product.images[0].url} alt={product.name}/>
        <p>{product.name}</p>
        <div>
            <Rating {...options}/>
            <span className='productCartSpan'>({product.numOfReviews}Reveiews)</span>
        </div>
        <span>Rs.{product.price}</span>
    </Link>
    </>
  )
}

export default ProductCart;