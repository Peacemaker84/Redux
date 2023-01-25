import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/action/productActions";

const Form = () => {
  const dispatch = useDispatch();
  const [n, setN] = useState("");
  const [p, setP] = useState(100);
  const handler = (e) => {
    e.preventDefault();
    const product = {
      name: n,
      price: p,
    };
    console.log(product);
    dispatch(addProduct(product));
    //или  dispatch({ type: "ADD", payload: product });
  };
  return (
    <form onSubmit={handler}>
      <div className="row">
        <label for="name">Название товара</label>
        <input
          type="text"
          id="name"
          placeholder="Помидор"
          value={n}
          onChange={(e) => setN(e.target.value)}
        />
      </div>
      <div className="row">
        <label for="name">Цена</label>
        <input
          type="number"
          id="price"
          placeholder="300"
          value={p}
          onChange={(e) => setP(e.target.value)}
        />
      </div>
      <button type="submit">Добавить товар</button>
    </form>
  );
};

export default Form;
