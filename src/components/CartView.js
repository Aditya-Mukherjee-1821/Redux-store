import React from "react";
import './CartView.css'
import { useDispatch } from "react-redux";
import {del} from '../redux/CartSlice'


function CartView(props) {

    const dispatch = useDispatch();

    const handleClick = (productId)=>{
        dispatch(del(productId));
    }

  return (
    
      
        <li className="list-group-item my-2 mx-1 d-flex justify-content-between align-items-center">
            <img className="cart-img m-2" src={props.productImage} alt="..."/>
            <div className="details">
                <h4>{props.productName}</h4>
            </div>
            <button onClick={()=>{handleClick(props.productId)} }className="btn btn-primary">Delete</button>
        </li>
        
      
   
  );
}

export default CartView;
