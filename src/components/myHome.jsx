import { Col, Container, Row } from "react-bootstrap";
import MyNav from "./myNav";
import SingleTrack from "./SingleTrack";

const MyHome = () => (
  <>
    {" "}
    <Container fluid>
      <Row>
        <Col sm={4}>
          <MyNav />
        </Col>

        <Col sm={8}>
          <SingleTrack />
        </Col>
      </Row>
    </Container>
  </>
);

export default MyHome;
