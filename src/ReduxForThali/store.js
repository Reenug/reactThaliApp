import { configureStore } from "@reduxjs/toolkit";
// import Checkout from "../thaliCompos/Checkout";
import  checkoutSlice  from "./thaliSlice";

const store = configureStore({
    reducer:{checkout:checkoutSlice
        
    }
})
 
export default store;