import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src="logotype.png" alt="logo" />
            BloxFruit Home
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="https://jut.su/oneepiece/">
              Погляд на світ фруктів
            </Nav.Link>
            <Nav.Link href="https://blox-fruits.fandom.com/ru/wiki/Blox_Fruits_%D0%92%D0%B8%D0%BA%D0%B8">
              Цікава інформація про гру!
            </Nav.Link>
            <Nav.Link href="https://t.me/+NtYcl7O4KmYwYmZi">Відгуки!</Nav.Link>
          </Nav>
          <button className="btn1">
            <a target="_blank" href="https://t.me/Zoro_rereno" rel="noreferrer">
              Оформити Замовлення!
            </a>
          </button>
          <button className="btn2">
            <a
              target="_blank"
              href="https://www.roblox.com/games/2753915549/Blox-Fruits"
              rel="noreferrer"
            >
              Грай Разом з нами!
            </a>
          </button>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}
