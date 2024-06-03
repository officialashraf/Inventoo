import React from 'react'
import image1 from "../Header/banner-image.png"
import image2 from "../Header/cart-item1.jpg"
import image3 from "../Header/cart-item2.jpg"
import "./crousel.css"
const Crousel = () => {
  return (
    <>
    <section id="billboard" className="position-relative overflow-hidden bg-light-blue">
      <div className="swiper main-swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-md-6">
                  <div className="banner-content">
                    <h1 className="display-2 text-uppercase text-dark pb-5">Your Products Are Great.</h1>
                    <a href="shop.html" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</a>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="image-holder">
                    <img src={image1} alt="banner"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="container">
              <div className="row d-flex flex-wrap align-items-center">
                <div className="col-md-6">
                  <div className="banner-content">
                    <h1 className="display-2 text-uppercase text-dark pb-5">Technology Hack You Won't Get</h1>
                    <a href="shop.html" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</a>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="image-holder">
                    <img src={image2} alt="banner"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="container">
              <div className="row d-flex flex-wrap align-items-center">
                <div className="col-md-6">
                  <div className="banner-content">
                    <h1 className="display-2 text-uppercase text-dark pb-5">Technology Ashraf Shaikh</h1>
                    <a href="shop.html" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Inventoo Shop</a>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="image-holder">
                    <img src={image3} alt="banner"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-icon swiper-arrow swiper-arrow-prev">
        <svg className="chevron-left">
          <use href="#chevron-left" />
        </svg>
      </div>
      <div className="swiper-icon swiper-arrow swiper-arrow-next">
        <svg className="chevron-right">
          <use href="#chevron-right" />
        </svg>
      </div>
    </section>
    </>
  )
}

export default Crousel;