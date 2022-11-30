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
    <div className="contaiderId"  style={{ maxWidth: 500, margin: "0 auto" }}>
      <section className="related">
        {relatedProducts.map((related) => (
          <h6>{related.title}</h6>
        ))}
      </section>
      <h5>{news?.title}</h5>
      <img src={news?.productImgs[1]} />
      <img src={news?.productImgs[2]} />


    </div>
  );
};

export default ProductId;
