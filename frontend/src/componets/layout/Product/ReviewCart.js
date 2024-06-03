import React from 'react'
import profilepng from "../images/Profile_Img.png"
import { Rating } from "@material-ui/lab";
import"../Product/productDetails.css"

const ReviewCart = ({review}) => {
    const options = {
      
        size: "large",
        value:review.rating,
        readOnly :true,
    precision : 0.5,
    };
  return (
    <>
    <div className='reviewCard'>
        <img src={profilepng} alt='User'/>
         <p>{review.name}</p>
         <Rating {...options}/>
         <span className='reviewCardComment'>{review.comment}</span>
    </div>
    </>
  )
}

export default ReviewCart