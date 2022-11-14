import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Styles/NavBar.css"
import CardWidget from './CardWidget'
import {Link} from 'react-router-dom';


function NavBar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to='/'><b><i>AESTHETIC</i></b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
            <Nav.Link as={Link} to="/category/1">{props.ItemList}</Nav.Link>
            <Nav.Link as={Link} to="/category/2">{props.ItemList2}</Nav.Link>
            <Nav.Link as={Link} to="/category/3">{props.ItemList3}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CardWidget/>
      </Container>
    </Navbar>
  );
}

export default NavBar;