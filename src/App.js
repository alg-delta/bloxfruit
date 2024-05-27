import "./App.css";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Main from "./components/Main";
import data from "./data";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const add = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, number: 1 }]);
    }
  };
  const remove = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart.number !== 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, number: productInCart.number - 1 }
            : item
        )
      );
    } else {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };
  const buy = () => {
    setCartItems([]);
    alert(
      "Ваше замовлення прийнято напишіть в мій телеграм з скріншотом корзини (Натисніть на кнопку Оформити замовлення)"
    );
  };

  return (
    <div className="App">
      <Header count={cartItems.length} />

      <Row>
        <Col md={8}>
          <Main products={data} add={add} />
        </Col>
        <Col>
          <Cart cartItems={cartItems} remove={remove} add={add} buy={buy} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
