import React from 'react'
import "./foooter.css"
import ecomexpress from "../images/ecomlogo.png"
import expressbe  from "../images/xpressbeslogo.png"
import stripe from"../images/stripelogo.png";
// import visa from"../images/visa.jpg";
// import mastercard from"../images/mastercard.jpg";
// import paypal from"../images/paypal.jpg";


const PaymentFooter = () => {
  return (
    <>
    <div id="footer-bottom">
      <div className="container">
        <div className="row d-flex flex-wrap justify-content-between">
          <div className="col-md-4 col-sm-6">
            <div className="Shipping d-flex">
              <p>We ship with:</p>
              <div className="card-wrap ps-2">
                <img className='shipping1' src={expressbe} alt="meesho"/>
                <img className='shipping' src={ecomexpress} alt="flipcart"/>

              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="payment-method d-flex">
              <p>Payment options:</p>
              <div className="card-wrap ps-2">
              <br></br><img className='stripe' src={stripe} alt="stripe"/>
                {/* <img classNameName='shipping' src={visa} alt="visa"/>
                <img  classNameName='shipping'src={mastercard} alt="mastercard"/>
                <img  classNameName='shipping'src={paypal} alt="paypal"/> */}
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="copyright">
              <p>© Copyright 2024 InvenToo.<br/> Design by  <b> Ashraf Shaikh.</b> <br/> Distribution by <b>iqraTech.</b> </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default PaymentFooter