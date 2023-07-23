import React, { useState, useEffect } from "react";
import CardView from "../components/CardView";
import "./Home.css"

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //call the api...
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="products">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <CardView
              productImage={product.image}
              productName={product.title}
              productPrice={product.price}
              productId={product.id}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
