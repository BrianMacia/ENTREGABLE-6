import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterNewsThunk, getNewsThunk, filterHeadlineThunk } from "../store/slices/products.slice";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Form, InputGroup } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products)
  const [categoriesList, setCategoriesList] = useState([]);
  const [inputSearch, setInputSearch] = useState("");


  useEffect(() => {
    dispatch(getNewsThunk());
    axios.get(`https://e-commerce-api.academlo.tech/api/v1/products/categories/`)
      .then((res) => setCategoriesList(res.data.data.categories));
  }, []);
  return (
    <div className="eco">

      <h2>E-commerce</h2>
      {categoriesList.map((category) => (
        <Button onClick={() => dispatch(filterNewsThunk(category.id))} style={{ maxWidth: 500, margin: "0 auto" }}>
          {category.name}
        </Button>
      ))}
      <InputGroup >
        <Form.Control className="inputg"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Button className="inputg"
          variant="outline-secondary"
          onClick={() => dispatch(filterHeadlineThunk(inputSearch))}
        >
          Search
        </Button>
      </InputGroup>
      {products.map((el) => (
        <li>
          <Link to={`/productId/${el.id}`} key={el.title}><h6>{el.title}</h6></Link>
          <Link to={`/productId/${el.id}`} key={el.price}> <h3>Price: ${el.price}</h3> </Link>
          <Link to={`/productId/${el.id}`} key={el.productImgs[0]}>{el.productImgs[0]}</Link>

        </li>

      ))}
    </div>
  );
};

export default Home;
