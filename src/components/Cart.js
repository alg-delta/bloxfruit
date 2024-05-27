import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
export default function Cart(props) {
  const { cartItems, remove, add, buy } = props;
  const totalPrice = cartItems.reduce(
    (sum, product) => sum + product.price * product.number,
    0
  );
  return (
    <div>
      <Alert variant="primary">
        <Alert.Heading>Кошик(Ван Піс Існує!)</Alert.Heading>
        {cartItems.length === 0 && <p>😥Кошик порожній😥</p>}
        <p>
          😀 Купи фрукт! це шанс стати королем піратів!😀 (перед відправкою
          зробіть скрін кошику!)
        </p>
        <table>
          <tr>
            <td width="25%">😀назва😀</td>
            <td width="25%">🤗кількість🤗</td>
            <td width="25%">🤑ціна🤑</td>
            <td width="25%">😎всього😎</td>
          </tr>
          {cartItems.map((product) => (
            <tr>
              <td width="25%">{product.name}</td>
              <Button onClick={() => remove(product)} variant="danger">
                -
              </Button>
              <td width="25%">{product.number}</td>
              <Button onClick={() => add(product)} variant="success">
                +
              </Button>
              <td width="25%">{product.price}UAH</td>
              <td width="25%">{product.price * product.number}UAH</td>
            </tr>
          ))}
        </table>
        <hr />
        <p className="mb-0">Сума до сплати {totalPrice}</p>

        <Button
          onClick={buy}
          disabled={cartItems.length === 0}
          variant="success"
        >
          🤑Купити Фруктик🤑
        </Button>
      </Alert>

      <iframe
        width="480
        "
        height="450
        "
        src="https://www.youtube.com/embed/zed5C9wld_M?si=5yGY_T_e4t3qhkFu"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <iframe
        width="480"
        height="450"
        src="https://www.youtube.com/embed/ylCpMI34fPo?si=cpigQG6WXe7WkrHM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <iframe
        width="480"
        height="450"
        src="https://www.youtube.com/embed/SJmhVoPgzvE?si=8GKtoNzCvJZTsF8x"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <iframe
        width="480"
        height="450"
        src="https://www.youtube.com/embed/FeWR1vi4g-A?si=EAe4nmkbwoHIEDHY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <iframe
        width="480"
        height="450"
        src="https://www.youtube.com/embed/KKlYEmdL_5I?si=AUqDcZZI7iQzHNpp"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <iframe
        width="480"
        height="450"
        src="https://www.youtube.com/embed/735XAGhheVk?si=OjQnTs-iVmMWgnny"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <iframe
        width="480"
        height="450"
        src="https://www.youtube.com/embed/u6IlrM5t9TU?si=0qRrtgrde4pPkyCk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <iframe
        width="480"
        height="450"
        src="https://www.youtube.com/embed/otXdk1pHrZ8?si=PyKbbFNgoxa4fGKT"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <iframe
        width="480"
        height="450"
        src="https://www.youtube.com/embed/VxYUpZUwBis?si=1vBl882QsgOcJqZ6"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}
