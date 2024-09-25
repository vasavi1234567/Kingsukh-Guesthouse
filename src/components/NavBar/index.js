import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';

const NavBar = () => {
  return (
    <>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
      
      <div className="small-container">
        <Navbar expand="lg">
          <Container className="nav-header">
            <div className="nav-header">
              <Navbar.Brand as={Link} to="/">
                <p className="small-logo">
                  Kingsukh 
                  <br/>
                  Guest House
                </p>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-button" />
            </div>
            <div className="nav-items-container">
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="nav-items">
                    <Nav.Link as={Link} to="/"><p className="item">Home</p></Nav.Link>
                    <Nav.Link as={Link} to="/about"><p className="item">About</p></Nav.Link>
                    <Nav.Link as={Link} to="/services"><p className="item">Services</p></Nav.Link>
                    <Nav.Link as={Link} to="/rooms"><p className="item">Rooms</p></Nav.Link>
                    <Nav.Link as={Link} to="/gallery"><p className="item">Gallary</p></Nav.Link>
                    <Nav.Link as={Link} to="/contact"><p className="item">Contact</p></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </div>

      <div className="big-container">
        <div className="navbar-container">
          <div>
            <Link to="/" className="logo-link">
              <h1 className="logo">
                Kingsukh 
                Guest House
              </h1>
            </Link>
          </div>
          <div className="items-list-container">
            <ul className="items-list d-flex align-items-center">
              <li className="list-item">
                <Link className="link" to="/">Home</Link>
              </li>
              <li className="list-item">
                <Link className="link" to="/about">About</Link>
              </li>
              <li className="list-item">
                <Link className="link" to="/services">Services</Link>
              </li>
              <li className="list-item">
                <Link className="link" to="/rooms">Rooms</Link>
              </li>
              <li className="list-item">
                <Link className="link" to="/gallery">Gallery</Link>
              </li>
              <li className="list-item">
                <Link className="link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="book-now-button-container">
            <button className="book-now-button">BOOK NOW</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
