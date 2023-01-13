import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart:[]
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item=action.payload
            const itemExist= state.cart.find((i)=>i.id === item.id)
            if(itemExist){
            }else{
                state.cart.push(action.payload)
            }

        },
        removeToCart:(state,action)=>{
            state.cart= state.cart.filter((i)=>i.id !==action.payload)
        },
        calculatePrice: (state) => {
            let sum = 0;
            state.cartItems.forEach((i) => (sum += i.price * i.quantity));
            state.subTotal = sum;
            state.shipping = state.subTotal > 1000 ? 0 : 200;
            state.tax = +(state.subTotal * 0.18).toFixed();
            state.total = state.subTotal + state.tax + state.shipping;
          },
        }
    }
)

export const {addToCart,removeToCart}=cartSlice.actions
export default cartSlice.reducer