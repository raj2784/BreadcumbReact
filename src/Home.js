import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const sliceProduct = data.products.slice(0, 7);
        setTrendingProducts(sliceProduct);

        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App-header">
      <h2>Home</h2>
      <span>Trending Products</span>
      <div className="product-grid">
        {trendingProducts?.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <Link to={`/productdetails/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
                <h3 style={{ color: "red" }}>${product.price}</h3>
              </Link>
            </div>
          );
        })}
      </div>
      <Link to="/productlist">
        <button
          style={{
            width: "100%",
            paddingTop: 10,
            paddingBottom: 10,
            paddingRight: "20px",
            paddingLeft: "20px",
            marginBottom: "10px",
            cursor: "pointer",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
          }}
        >
          View all products
        </button>
      </Link>
    </div>
  );
}

export default Home;
