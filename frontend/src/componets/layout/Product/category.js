import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import {  useDispatch, useSelector } from "react-redux";
import { getProduct, clearErrors } from "../../action/productAction";
import { useParams } from "react-router-dom";
const categories = [
    "Smart-Gadgets",
    "Gifts Lamps",
    "Couple Thumbpress",
    "Mobile Accessories",
    "Keychanin",
    "Trophis",
    "Antic Items",
  ];
const Caategory = () => {
    
    const [category, setCategory] = useState("");
    const { keyword } = useParams();
  const alert = useAlert();
  const dispatch = useDispatch();
  const {
    error,
    
  } = useSelector((state) => state.products);
   
    useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
        
      }, [dispatch, keyword, error, alert,  category]);
      getProduct(keyword,  category);

  return (
    <ul className="Categories">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
  )
}

export default Caategory