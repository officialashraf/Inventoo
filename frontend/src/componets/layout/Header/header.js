import React from "react";
import "./header.css"
import Logo from "../images/logo.png";

const Header = () => {
  return (
    <>
      <header id="header" className="site-header header-scrolled position-fixed text-black bg-light">
        <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={Logo} className="logo" alt='noImage' />
            </a>
            <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
              <svg className="navbar-icon">
                <use href="#navbar-icon"></use>
              </svg>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
              <div className="offcanvas-header px-4 pb-0">
                <a className="navbar-brand" href="index.html">
                  <img src={Logo} className="logo" alt='logo' />
                </a>
                <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar"></button>
              </div>
              <div className="offcanvas-body">
                <ul id="navbar" className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link me-4 active" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-4" href="/products">Products</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-4" href="/services">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-4" href="/about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link me-4" href="/contact">ContactUs</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link me-4 dropdown-toggle link-dark" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="false">CustomizeGift</a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href={`/products`}> SmartGadgets</a>
                      </li>
                      <li>
                        <a href={`/products`} className="dropdown-item">GiftLamps</a>
                      </li>
                      <li>
                        <a href={`/products`} className="dropdown-item">CoupleThumb</a>
                      </li>
                      <li>
                        <a href={`/products`} className="dropdown-item">MobileAccesories</a>
                      </li>
                      <li>
                        <a href={`/products`} className="dropdown-item">Keychain</a>
                      </li>
                      <li>
                        <a href={`/products`} className="dropdown-item">AnticItem</a>
                      </li>
                      <li>
                        <a href={`/products`} className="dropdown-item">Trophis</a>
                      </li>
                    </ul>
                  </li>
                  <div className="iconlogin">
                  <li className="search-item pe-3">
                          <a href="/search" className="search-button">
                            <svg className="search">
                              <use href="#search"></use>
                            </svg>
                          </a>
                        </li>
                        <li className="pe-3">
                          <a href="/login">
                            <svg className="user">
                              <use href="#user"></use>
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href="/cart" >
                            <svg className="cart" >
                              <use href="#cart"></use>
                            </svg>
                          </a>
                        </li>
                  </div>
                  <li className="nav-item" id="nav-search">
                    <div className="user-items ps-5">
                      <ul className="d-flex justify-content-end list-unstyled">
                       
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;

