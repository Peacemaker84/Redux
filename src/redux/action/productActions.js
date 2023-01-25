const addProduct = (obj) => {
  return {
    type: "ADD",
    payload: obj,
  };
};

const delProduct = (name) => {
  return {
    type: "DEL",
    payload: name,
  };
};
const updProduct = (obj) => {
  return {
    typr: "UPD",
    payload: obj,
  };
};
export { addProduct, delProduct, updProduct };
