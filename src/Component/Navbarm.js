import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Navbarm = ({
  nameSearch,
  setNameSearch,
  rateSearch,
  setRateSearch
}) => {
  const ratingChanged = (event) => {
    setRateSearch(event);
  };

  const refreshPage = () => {
    window.location.reload();
  };
   
  const handleChange=(event)=>{
setNameSearch(event.target.value)
  }

  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        
        <Navbar.Brand style={{ color: "white", fontSize: "30px" }}>
          Movie App
        </Navbar.Brand>
     
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
            
            <Link>mehdi</Link>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
              value={nameSearch}
            />
          </Form>
        </Navbar.Collapse>
        <ReactStars
          count={10}
          onChange={ratingChanged}
          size={20}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
          value={rateSearch}
        />
        <Button variant="outline-success" onClick={refreshPage}>
          Reset
        </Button>
      </Container>
    </Navbar>
  );
};

export default Navbarm;
