import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createCartThunk } from "../store/slices/cart.slice";
import { getNewsThunk } from "../store/slices/products.slice";

const ProductId = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsThunk());
  }, []);

  const productList = useSelector((state) => state.products);

  const news = productList?.find((el) => el.id === Number(id));
  const relatedProducts = productList.filter(
    (el) => el.category.name == news.category.name
  );
  console.log(productList);

const [quantity, setQuantity ] =useState("")
  const addproduct = () => {
    const productcartadded = {
      id: news.id,
      quantity: quantity
    };
    dispatch(createCartThunk(productcartadded));

    console.log(product);
  };


  return (
    
    
    
    <div className="contaiderId"  style={{ maxWidth: 1500, margin: "auto" }}>
      <section className="related">
        {relatedProducts.map((related) => (
          
          <h1>{related.title}</h1>
          
        ))}
      </section>
      
      <h3>Price:</h3>
      <h5> ${news?.price}</h5>
      <h3>Description:</h3>
      <h5> {news?.description}</h5>
      <h3>Category:</h3>
      <h5> {news?.category.name}</h5>
      <img src={news?.productImgs[1]} />
      <img src={news?.productImgs[2]} />
      <input type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)} />
            <button onClick={addproduct}>Add to products</button>
    </div>
     
     

   
   
  );
};

export default ProductId;
