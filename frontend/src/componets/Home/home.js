import React, { useEffect } from "react";
import "./home.css";
import ProductCart from "../layout/Product/productCart";
import CrouSel from "../layout/Crousel/carousel2";
//import Services from "../layout/ServiceO/services";
import Watches from "../layout/Product/waches";
import LatestProduct from "../layout/Product/latestproduct";
import SingalBanner from "../layout/Singalbanner/Singalbanner";
import Footer from "../layout/Footer/footer"
import PaymentFooter from "../layout/Footer/paymentFooter"
import MetaData from "../layout/Header/MetaData";
import { getProduct, clearErrors } from "../action/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/loader";
import { useAlert } from "react-alert";
import Services from "../layout/ServiceO/services";

const latestproduct = {
  name: "Drone",
  price: "5000",
  _id: "Drone",
  images: [{ url: "https://res.cloudinary.com/drobmyjrl/image/upload/v1717064076/latestproduct/drnoe_cztri9.jpg" }],
};
const latestproduct1 = {
  name: "DSLR Camer",
  price: "8000",
  _id: "cameras",
  images: [{ url: "https://res.cloudinary.com/drobmyjrl/image/upload/v1717064084/latestproduct/camera_gqvszt.webp" }],
};
const latestproduct2 = {
  name: "Laptop",
  price: "45000",
  _id: "laptop",
  images: [{ url: "https://res.cloudinary.com/drobmyjrl/image/upload/v1717064098/latestproduct/laptop_kkg4dj.jpg" }],
};
const waches = {
  name: "T-20 Smart Watch",
  price: "679",
  _id: "T-20",
  images: [{ url: "https://res.cloudinary.com/drobmyjrl/image/upload/v1717060795/watches/t800_teosrs.jpg" }],
  
};
const waches1 = {
  name: "mi Smart Watch ",
  price: "499",
  _id: "mi Smart Watch",
  images: [{ url: "https://res.cloudinary.com/drobmyjrl/image/upload/v1717060781/watches/miwatch_gadj5q.jpg" }],
  
};
const waches2 = {
  name: "GARMIN Unisex ",
  price: "1199",
  _id: "GARMIN Unisex",
  images: [{ url:"https://res.cloudinary.com/drobmyjrl/image/upload/v1717060826/watches/garmin_vlcll5.jpg" }],
  
};
const waches3 = {
  name: "Pebble Hive HD Octa Display",
  price: "1349",
  _id: "Pebble Hive",
  images: [{ url: "https://res.cloudinary.com/drobmyjrl/image/upload/v1717060807/watches/pebble_xdunvo.webp" }],
  
};


const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors())
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
 

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Inventoo" />
         
          
          
          <CrouSel />
          <h2 className="productHeading">FEATURE PRODUCT</h2>
          <div className="container1" >
            {products && products.map((product,index) => <div key={index}>< ProductCart product={product} /></div>)}
          </div>
          <h2 className="wachesHeading" style={{marginBottom:'0px', paddingBottom:"0px"}}>SERVICES</h2>
          <Services />
          <h2 className="wachesHeading">WATCHES</h2>
          <div className="container2" >
            <Watches waches={waches} />
            <Watches waches={waches1} />
            <Watches waches={waches2} />
            <Watches waches={waches3} />
          </div>
          <h2 className="wachesHeading">LATEST PRODUCT</h2>
          <div className="container3">
            <LatestProduct latestproduct={latestproduct} />
            <LatestProduct latestproduct={latestproduct1} />
            <LatestProduct latestproduct={latestproduct2} />
          </div>
          <SingalBanner />
          <Footer />
      <PaymentFooter />
        
        </>
      )}
    </>
  );
};

export default Home;
