import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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

  return (
    <>
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
    </div>
     <input
     type="text"  />
    
     

   
   </>
  );
};

export default ProductId;
