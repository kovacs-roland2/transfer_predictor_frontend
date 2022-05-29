import logo from "./../logo.png";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = ({ onClick }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <img src={logo} className="App-logo" alt="logo" />
      <Nav className="me-auto">
        <Nav.Link data-filter="overview" onClick={onClick}>
          Overview
        </Nav.Link>
        <Nav.Link data-filter="players" onClick={onClick}>
          Players
        </Nav.Link>
        <Nav.Link data-filter="similarity" onClick={onClick}>
          Similarity
        </Nav.Link>
        <Nav.Link data-filter="predictions" onClick={onClick}>
          Predictions
        </Nav.Link>
      </Nav>
      <p
        style={{
          marginLeft: "auto",
          marginRight: "1%",
          color: "#84dbff",
          fontSize: "calc(5px + 2vmin)",
        }}
      >
        Transfer Predictor
      </p>
    </Navbar>
  );
};

export default Header;
