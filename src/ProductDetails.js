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
        //console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div>
        <h1>ProductDetails</h1>
      </div>
      {product ? (
        <div style={{ padding: "20px", display: "flex" }}>
          <img
            style={{ height: 300, width: 400 }}
            src={product.thumbnail}
            alt={product.title}
          />
          <div style={{ padding: "20px" }}>
            <h3>{product.title}</h3>
            <h3>${product.price}</h3>
            <div style={{ marginTop: "110px" }}>
              <h3>Description :</h3>
              {product.description}
            </div>
          </div>
        </div>
      ) : (
        <p>loadding....</p>
      )}
    </>
  );
}

export default ProductDetails;
