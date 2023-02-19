import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function Products() {
  const url = "https://63f0f6a15703e063fa4fdfea.mockapi.io/api/v1/Products/";
  const [products, setProducts] = useState({
    loading: false,
    data: null,
  });

  let content = null;
  useEffect(() => {
    setProducts({
      loading: true,
      data: null,
    });
    axios.get(url).then((response) => {
      setProducts({
        loading: false,
        data: response.data,
      });
    });
  }, [url]);

  if (products) {
    content = (
      <div>
        <h1>{products.name}</h1>
        <div>
          <img src="products.images.imageUrl" alt="products.name"></img>
        </div>
        <div className="font-bold text-xl mb-3"> $ {products.price}</div>
        <div>{products.description}</div>
      </div>
    );
  }
  return <div>{content}</div>;
}

export default Products;
