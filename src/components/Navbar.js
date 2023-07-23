import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="custom-style navbar bg-body-tertiary">
      <div className="container-fluid d-flex flex-row align-items-centers">
        <div>
          <NavLink to="/" className="navbar-brand">
            Redux Store
          </NavLink>
        </div>
        <NavLink className="cart" to="/cart">
          <div className="mx-3 my-2">
            <i class="fa-solid fa-cart-shopping d-flex align-items-center">
              <span className="cart-badge ">{cart.length}</span>
            </i>
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
