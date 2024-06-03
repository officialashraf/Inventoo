import React from 'react'
import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component"
import "./waches.css"


const options = {
    edit:false,
    color: "rgba(20,20,20,0.1)",
    activeColor : "tomato",
    size: window.innerWidth < 600 ? 20: 25,
    value:2.5,
    isHalf: true,
};

const Waches = ({waches}) => {
  return (
    <>
    <Link className='WachesCart' to='/products'>
        <img src={waches.images[0].url} alt={waches.name}/>
        <p>{waches.name}</p>
        <div>
            <ReactStars {...options}/> <span>(256 Reveiews)</span>
        </div>
        <span>{waches.price}</span>
    </Link>
    </>
  )
}

export default Waches;