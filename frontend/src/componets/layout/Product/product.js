import React, { useEffect, useState } from "react";
import ProductCart from "./productCart";
import { getProduct, clearErrors } from "../../action/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/loader";
import { useAlert } from "react-alert";

import "../Product/product.css";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import { Slider, Typography } from "@material-ui/core";
import MetaData from "../Header/MetaData";

//import ProductCart from "../layout/Product/productCart";

const categories = [
  "Smart-Gadgets",
  "Gifts Lamps",
  "Couple Thumbpress",
  "Mobile Accessories",
  "Keychanin",
  "Trophis",
  "Antic Items",
];
const Product = () => {
  const { keyword } = useParams();
  const alert = useAlert();
  const dispatch = useDispatch();
  const {
    products,
    loading,
    error,
    resultPerPage,
    productsCount,
    filteredProductsCount,
  } = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [ratings, setratings] = useState(0);

  const priceHandler = (event, newPrice) => setPrice(newPrice);
  const setCurrentPageNo = (e) => setCurrentPage(e);

  const count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, error, alert, currentPage, price, category, ratings]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="PRODUCTS"/>
          <h2 className="productHeading1">Products</h2>
          <div className="product">
            {products &&
              products.map((product) => (
                <ProductCart key={product._id} product={product} />
              ))}
          </div>
          <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
              value={price}
              min={0}
              max={25000}
              aria-labelledby="range-slider"
              onChange={priceHandler}
              valueLabelDisplay="auto"
            />
            <Typography>Category</Typography>
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
            <fieldset className="fset">
            <Typography component="legend">Ratings Above</Typography>
            <Slider
              value={ratings}
              onChange={(e, newRatings)=>{
                setratings(newRatings);
              }}
              min={0}
              max={5}
              aria-labelledby="continuous-slider"
              valueLabelDisplay="auto"
              
            />
            </fieldset>

          </div>

          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Product;
