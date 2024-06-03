import React, { useEffect } from "react";
import "./productDetails.css";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails, newReview } from "../../action/productAction";
import { useParams } from "react-router-dom";
import ReviewCart from "./ReviewCart";
import Loader from "../Loader/loader.js";
import { useAlert } from "react-alert";
import MetaData from "../Header/MetaData.js";
import { useState } from "react";
import { addItemsToCart } from "../../action/cartAction.js";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { NEW_REVIEW_RESET } from "../../constant/productConstants.js";

const ProductDetails = () => {

  const { id } = useParams();
  const alert = useAlert();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.productDetails);
  const { success, error: reviewError } = useSelector((state) => state.newReview);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    }

    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
    dispatch(getProductDetails(id));
  }, [dispatch, id, error, alert, success, reviewError]);


  const options = {
    size: "large",
    value: product.ratings,
    readOnly :true,
    precision : 0.5,
  };
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (product.stock <= quantity) return;
    const qty = quantity + 1;
    setQuantity(qty);
  }

  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    const qty = quantity - 1;
    setQuantity(qty);
  }

  const addToCartHandler=()=>{
   dispatch(addItemsToCart(id, quantity));
   alert.success("Item Added Successfully")
  }
 
  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId",id);

    dispatch(newReview(myForm));

    setOpen(false);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`${product.name} PRODUCT`} />
          <div className="ProductDetails">
            <div>
              <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={item.url}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>
            <div>
              <div className="Details_Block-1">
                <h2>{product.name}</h2>
                <p> Product #{product._id}</p>
              </div>
              <div className="Details_Block-2">
                <Rating {...options} />
                <span className="Details_Block-2-span">({product.numOfReviews} Reveiews)</span>
              </div>
              <div className="Details_Block-3">
                <h1>Rs.{product.price}</h1>
                <div className="Details_Block-3-1">
                  <div className="Details_Block-3-1-1">
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly value={quantity} type="number"/>
                    <button onClick={increaseQuantity}>+</button>{" "}
                  </div>
                  <button disabled={product.stock < 1 ? true : false} onClick={addToCartHandler}>Add to cart</button>
                </div>
                <p>
                  Stock:{" "}
                  <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                    {product.stock < 1 ? "OutStock" : "InStock"}
                  </b>
                </p>
              </div>
              <div className="Details_Block-4">
                Description: <p>{product.description}</p>
              </div>
              <button onClick={submitReviewToggle} className="Submit_Review" >Submit Review</button>
            </div>

          </div>
          <h3 className="reviewsHeading">Reveiews</h3>

          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>

          {product.reviews && product.reviews[0] ? (
            <div className="reviews">
              {product.reviews &&
                product.reviews.map((review) => <ReviewCart review={review} />)}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
        </>
      )}
    </>
  );
};

export default ProductDetails;
