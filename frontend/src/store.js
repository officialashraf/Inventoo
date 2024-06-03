import { createStore, combineReducers, applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import {newProductReducer, newReviewReducer, productDetailsReducer, productReducer, productReviewsReducer, productsReducer, reviewReducer} from "../src/componets/reducer/productReducer"
import { allUsersReducer, forgotPasswordReducer, profileReducer, userDetailsReducer, userReducer } from "./componets/reducer/userReducer";
import { cartReducer } from "./componets/reducer/cartReducer";
import {
    allOrdersReducer,
    myOrdersReducer,
    newOrderReducer,
    orderDetailsReducer,
    orderReducer,
  } from "./componets/reducer/orderReducer";
  

const reducer = combineReducers({
    products : productsReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    profile: profileReducer,
    forgotPassword:forgotPasswordReducer,
    cart: cartReducer,
    newOrder : newOrderReducer,
    myOrders: myOrdersReducer,
    orderDetails: orderDetailsReducer,
    allOrders: allOrdersReducer,
    order: orderReducer,
    newReview: newReviewReducer,
    newProduct: newProductReducer,
    product: productReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    productReviews:productReviewsReducer,
    review: reviewReducer,
    
});

let initialState ={
    cart: {
        carItems:localStorage.getItem("carItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
        shippingInfo :localStorage.getItem("shippingInfo ")
        ? JSON.parse(localStorage.getItem("shippingInfo "))
        : {},
    },
 };

const middleware = [thunk];

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;

