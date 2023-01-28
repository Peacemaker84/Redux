/* 
действия:
1) добавить товар в корзину
2) увеличить кол-во товара
3) уменьшить кол-во товара
    3.1 если кол-во товара === 0 =Ю удалить товар из корзины

*/

const addToCart = (obj) => {
  return {
    type: "ADD",
    payload: obj,
  };
};

const increment = (id) => {
  return {
    type: "INC",
    payload: id,
  };
};

const decrement = (id) => {
  return {
    type: "DEC",
    payload: id,
  };
};

export { addToCart, increment, decrement };
