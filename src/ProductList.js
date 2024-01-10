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
      <h2>Product Listing</h2>
      <h3>Trending Products</h3>
      <div className="App-header">
        <div className="product-grid">
          {products?.map((product) => {
            return (
              <div className="product-card" key={product.id}>
                <Link to={`/products/${product.id}`}>
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
