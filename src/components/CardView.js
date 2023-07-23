import React from "react";
import './CardView.css'
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/CartSlice";

function CardView(props) {

  const dispatch = useDispatch();
  const cart = useSelector(state=>state.cart)

  const handleClick=(product)=>{
    let flag = false;
    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      if(element.id === product.id){
        flag = true;
        break;
      }
      
    }
    if(!flag) dispatch(add(product));
  }
  return (
    <div className="m-2">
      <div className="card align-items-center" style={{width: "18rem"}}>
        <img src={props.productImage} className="m-2 card-img-top prod-img" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.productName}</h5>
          <p className="card-text">
          ₹{props.productPrice}
          </p>
          <button onClick={()=>{handleClick({image: props.productImage, title: props.productName, price: props.productPrice, id:props.productId})}} className="btn btn-primary">
            Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardView;
