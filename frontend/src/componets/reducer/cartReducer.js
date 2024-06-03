import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
  } from "../constant/cartConstants";
  
  export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
       case ADD_TO_CART:
         const item = action.payload;
         const test = state.cartItems || []; // Ensure test is an array
        
         const isItemExist = test.find((i) =>
           i.product === item.product
         );
        
         if (isItemExist) {
           return {
             ...state,
             cartItems: test.map((i) =>
               i.product === isItemExist.product ? item : i
             )
           };
         } else {
           return {
             ...state,
             cartItems: [...test, item], // No need to spread state.cartItems here
           };
         }
      case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      };


      case SAVE_SHIPPING_INFO:
        return{
          ...state,
          shippingInfo : action.payload,
        }

  
       default:
         return state;
     }
 };