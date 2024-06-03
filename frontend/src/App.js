import React, { useEffect, useState } from "react";
import './App.css';
import Home from './componets/Home/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from './componets/layout/Product/productDetails';
import Product from "./componets/layout/Product/product"
import Searchbar from './componets/layout/Header/searchbar';
import LoginSignup from './componets/User/loginSignup';
import { loadUser } from "./componets/action/userAction"
import store from "./store";
import WebFont from "webfontloader"
import UserOption from "./componets/User/userOption";
import { useSelector } from "react-redux";
import Profile from "./componets/User/profile";
import ProtectedRoute from "./componets/Route/protectedRoute";
import UpdateProfile from "./componets/User/updateProfile";
import UpdatePassword from "./componets/User/updatePassword";
import ForgotPassword from "./componets/User/forgotPassword";
import ResetPassword from "./componets/User/resetPassword";
import Cart from "./componets/layout/Cart/cart";
import Shipping from "./componets/layout/Cart/shipping";
import ConfirmOrder from "./componets/layout/Cart/confirmOrder";
import Payment from "./componets/layout/Cart/payment";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./componets/layout/Cart/orderSucces";
import MyOrders from "./componets/layout/Order/myOrder";
import OrderDetails from "./componets/layout/Order/orderDetails";
import About from "./componets/layout/About/aboutUs";
import Contact from "./componets/layout/Contact/conatctUs";
import Header from "./componets/layout/Header/header";
//import Footer from "./componets/layout/Footer/footer"
//import PaymentFooter from "./componets/layout/Footer/paymentFooter"
import Services from "./componets/layout/ServiceO/services";
//import Waches from "./componets/layout/Product/waches";
import Dashbord from "./componets/Admin/dashbord.js"
import ProductList from "./componets/Admin/productList.js";
import NewProduct from "./componets/Admin/newProduct.js";
import UpdateProduct from "./componets/Admin/updateProduct.js";
import OrderList from "./componets/Admin/orderList.js";
import ProcessOrder from "./componets/Admin/processOder.js";
import UsersList from "./componets/Admin/userList.js";
import UpdateUser from "./componets/Admin/updateUser.js";
import ProductReviews from "./componets/Admin/productReviews.js";
import NotFound from "./componets/layout/NotFound/notFound.js"

function App() {

  const { isAuthenticated, user } = useSelector(state => (state.user))
  const [stripeApiKey, setStripeApiKey] = useState("");

 

  async function getStripeApiKey() {
    try {
      const response = await axios.get("/api/v1/stripeapikey");

      if (response.status === 200) {
        setStripeApiKey(response.data.stripeApiKey);
      } else {
        console.error("Failed to retrieve Stripe API key:", response.statusText);
      }
    } catch (error) {
      console.error("Error while fetching Stripe API key:", error.message);
    }
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Driod Sans", "Chilanka"],
      },
    })
    store.dispatch(loadUser());
    getStripeApiKey();
  }, [])
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        {isAuthenticated && <UserOption user={user} />}

        {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <Routes>
              <Route path="/process/payment" element={<ProtectedRoute Component={Payment} />} />
            </Routes>
          </Elements>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:keyword" element={<Product />} />
          <Route path="/search" element={<Searchbar />} />
          <Route path="/services" element={<Services />} />
          <Route path="/account" element={<ProtectedRoute Component={Profile} />} />
          <Route path="/me/update" element={<ProtectedRoute Component={UpdateProfile} />} />
          <Route path="/password/update" element={<ProtectedRoute Component={UpdatePassword} />} />
          <Route path="/shipping" element={<ProtectedRoute Component={Shipping} />} />
          <Route path="/order/confirm" element={<ProtectedRoute Component={ConfirmOrder} />} />
          <Route path="/success" element={<ProtectedRoute Component={OrderSuccess} />} />
          <Route path="/orders" element={<ProtectedRoute Component={MyOrders} />} />
          <Route path="/order/:id" element={<ProtectedRoute Component={OrderDetails} />} />
          <Route path="/admin/dashboard" isAdmin={true} element={<ProtectedRoute Component={Dashbord} />} />
          <Route path="/admin/products" isAdmin={true} element={<ProtectedRoute Component={ProductList} />} />
          <Route path="/admin/product" isAdmin={true} element={<ProtectedRoute Component={NewProduct} />} />
          <Route path="/admin/product/:id" isAdmin={true} element={<ProtectedRoute Component={UpdateProduct} />} />
          <Route path="/admin/orders" isAdmin={true} element={<ProtectedRoute Component={OrderList} />} />
          <Route path="/admin/order/:id" isAdmin={true} element={<ProtectedRoute Component={ProcessOrder} />} />
          <Route path="/admin/users" isAdmin={true} element={<ProtectedRoute Component={UsersList} />} />
          <Route path="/admin/user/:id" isAdmin={true} element={<ProtectedRoute Component={UpdateUser} />} />
          <Route path="/admin/reviews" isAdmin={true} element={<ProtectedRoute Component={ProductReviews} />} />
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/process/payment" element={<Payment />} />
        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
    
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
