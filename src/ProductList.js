import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="App-header">
        <h2>Product Listing</h2>
        <span>Trending Products</span>
        <div className="product-grid">
          {products?.map((product) => {
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
      </div>
    </>
  );
}
export default ProductList;
