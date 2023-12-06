import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="/">MP Shop</Navbar.Brand>
          <Nav className="me-auto Navbar ">
            <Link className="Navbar" to="/">
              Inicio
            </Link>
            <Link className="Navbar" to="/category/maquillaje">
              Maquillaje
            </Link>
            <Link className="Navbar" to="/category/corporales">
              Corporales
            </Link>
            <Link className="Navbar" to="/category/fragancias">
              Fragancias
            </Link>
          </Nav>
          <Link to="/cart">
            <CartWidget />
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
