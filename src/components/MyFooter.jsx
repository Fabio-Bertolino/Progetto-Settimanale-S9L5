import { Container, Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

function MyFooter() {
  return (
    <Container fluid className="bg-black text-white pt-3">
      <Row>
        <Col xs={12} md={2}></Col>
        <Col xs={12} md={"auto"} className="text-center text-md-start text-secondary">
          <div>
            <a href="#">
              <Facebook className="text-secondary fs-4 me-2" />
            </a>
            <a href="#">
              <Instagram className="text-secondary fs-4 me-2" />
            </a>
            <a href="#">
              <Twitter className="text-secondary fs-4 me-2" />
            </a>
            <a href="#">
              <Youtube className="text-secondary fs-4" />
            </a>
          </div>
        </Col>
        <Col xs={12} md={2}></Col>
      </Row>
      <Row>
        <Col xs={12} md={2}></Col>
        <Col xs={12} md={2} className="text-center text-md-start">
          <a className="text-secondary link-underline link-underline-opacity-0 d-block py-2" href="#">
            Audio and Subtitles
          </a>
          <a className="text-secondary link-underline link-underline-opacity-0 d-block py-2" href="#">
            Media Center
          </a>
          <a className="text-secondary link-underline link-underline-opacity-0 d-block py-2" href="#">
            Privacy
          </a>
          <a className="text-secondary link-underline link-underline-opacity-0 d-block py-2" href="#">
            Contact Us
          </a>
        </Col>
        <Col xs={12} md={2} className="text-center text-md-start">
          <a className="text-secondary link-underline link-underline-opacity-0 d-block py-2" href="#">
            Audio Description
          </a>
          <a className="text-secondary link-underline link-underline-opacity-0 d-block py-2" href="#">
            Investor Relations
          </a>
          <a className="text-secondary link-underline link-underline-opacity-0 d-block py-2" href="#">
            Legal notices
          </a>
        </Col>
        <Col xs={12} md={2} className="text-center text-md-start">
          <a className="text-secondary link-underline link-underline-opacity-0 d-block py-2" href="#">
            Help Center
          </a>
          <a className="text-secondary link-underline link-underline-opacity-0 d-block py-2" href="#">
            Jobs
          </a>
          <a className="text-secondary link-underline link-underline-opacity-0 d-block py-2" href="#">
            Cookie areferences
          </a>
        </Col>
        <Col xs={12} md={2} className="text-center text-md-start">
          <a className="text-secondary link-underline link-underline-opacity-0 d-block py-2" href="#">
            Gift Cards
          </a>
          <a className="text-secondary link-underline link-underline-opacity-0 d-block py-2" href="#">
            Terms of Use
          </a>
          <a className="text-secondary link-underline link-underline-opacity-0 d-block py-2" href="#">
            Coraorate informations
          </a>
        </Col>
        <Col xs={12} md={2}></Col>
      </Row>
      <Row className="pt-4 pb-3">
        <Col xs={12} md={2}></Col>
        <Col xs={12} md={"auto"} className="text-center text-md-start text-secondary">
          <Button variant="outline-secondary" size="sm" className="rounded-0">
            Service Code
          </Button>
        </Col>
        <Col xs={12} md={2}></Col>
      </Row>
      <Row>
        <Col xs={12} md={2}></Col>
        <Col xs={12} md={"auto"} className="text-center text-md-start text-secondary">
          <p className="text-secondary">&copy 1997-2019 Netflix, inc. &#123;i=############&#125;</p>
        </Col>
        <Col xs={12} md={2}></Col>
      </Row>
    </Container>
  );
}

export default MyFooter;
