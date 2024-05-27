import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function Product(props) {
  const { product, add } = props;
  return (
    <Card style={{ width: "18rem", padding: "0" }}>
      <Card.Img variant="top" src={product.Image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.text}</Card.Text>
        <Card.Text>{product.price}UAH</Card.Text>

        <Button onClick={() => add(product)} variant="outline-success">
          🤑Купити🤑
        </Button>
      </Card.Body>
    </Card>
  );
}
