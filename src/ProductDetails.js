import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h1>ProductDetails</h1>
      {product ? (
        <div style={{ padding: "20px" }}>
          <img
            style={{ height: 300, width: 400 }}
            src={product.thumbnail}
            alt={product.title}
          />
          <div>
            <h3>{product.title}</h3>
          </div>
          <div>
            <h3>${product.price}</h3>
          </div>

          <p>{product.description}</p>
        </div>
      ) : (
        <p>loadding....</p>
      )}
    </>
  );
}

export default ProductDetails;
