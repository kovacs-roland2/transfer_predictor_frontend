import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const HomeBodyNavbar = ({ onClick }) => {
  return (
    <Navbar bg="light" variant="light">
      <Nav className="me-auto">
        <Nav.Link data-filter="standard" onClick={onClick}>
          Standard
        </Nav.Link>
        <Nav.Link data-filter="goalkeeper" onClick={onClick}>
          Goalkeeper
        </Nav.Link>
        <Nav.Link data-filter="defender" onClick={onClick}>
          Defender
        </Nav.Link>
        <Nav.Link data-filter="midfielder" onClick={onClick}>
          Midfielder
        </Nav.Link>
        <Nav.Link data-filter="attacker" onClick={onClick}>
          Attacker
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default HomeBodyNavbar;
