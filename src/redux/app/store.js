import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cartSlice from "../features/cartSlice";

export const store=configureStore({
    reducer:{
        cart:cartSlice
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(logger)
})