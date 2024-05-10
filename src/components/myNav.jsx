import {
  Button,
  Container,
  Form,
  Image,
  ListGroup,
  ListGroupItem,
  Navbar,
  Row,
} from "react-bootstrap";
import img from "../assets/logo/logo.png";
import { Link } from "react-router-dom";
const MyNav = () => (
  <Navbar
    className="navbar navbar-expand-md fixed-left justify-content-between  "
    id="sidebar"
  >
    <Container className="container flex-column align-items-start">
      <Container fluid>
        <Image src={img} width={131} height={40} />
      </Container>
      <Container className="collapse navbar-collapse  mt-4">
        <Container className="navbar-nav ">
          <ListGroup>
            <ListGroupItem className="list">
              {" "}
              <Link
                className="text-decoration-none"
                style={{ color: "white" }}
                to="/"
              >
                Home
              </Link>
            </ListGroupItem>
            <ListGroupItem className="list">
              {" "}
              <Link
                className="text-decoration-none"
                to="/"
                style={{ color: "white" }}
              >
                Home
              </Link>
            </ListGroupItem>
            <ListGroupItem
              className="list mt-3"
              style={{
                backgroundColor: "black",
                border: "solid 1px black",
                display: "flex",
              }}
            >
              {" "}
              <Form.Control type="text" style={{ width: "150px" }} />
              <Button
                className="btn-dark"
                style={{ border: "solid 1px white" }}
              >
                GO
              </Button>
            </ListGroupItem>{" "}
            <Row className="nav-btn">
              <Button className="btn signup-btn">Sign Up</Button>
              <Button className="btn login-btn"> Login</Button>
              <div className="d-flex gap-2">
                <Link to="/">Cookie Policy </Link>
                <p>|</p>
                <Link to="/"> Privacy</Link>
              </div>
            </Row>
          </ListGroup>
        </Container>
      </Container>
    </Container>
  </Navbar>
);

export default MyNav;
