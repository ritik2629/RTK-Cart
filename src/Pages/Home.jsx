import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cartSlice';
export const Home=()=> {
    const dispatch=useDispatch()
    // const state=useSelector(state=>state.)
    const [product,setProduct]=useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/').then((resp)=>{
            return setProduct(resp.data)
        })
    },[])
  return (
    <div>
        {product.map((item)=>{
            const {title,price,id,image}=item;
            return(
                <div key={id}>
                <p>{title}</p>
                <button onClick={()=>dispatch(addToCart(item))}>Add</button>
                </div>
            )
        })}
       </div>
  );
}