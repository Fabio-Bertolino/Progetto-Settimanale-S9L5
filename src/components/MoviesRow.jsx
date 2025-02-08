import { Row, Col, Spinner, Alert } from "react-bootstrap";

function MoviesRow(props) {
  console.log(props.movies);
  return (
    // come metterli nel map?
    <Row className="g-1">
      {props.loading && (
        <Col>
          <Spinner animation="border" role="status" variant="secondary" className="d-block mx-auto">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Col>
      )}
      {props.loading && (
        <Col>
          <Spinner animation="border" role="status" variant="secondary" className="d-block mx-auto">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Col>
      )}
      {props.loading && (
        <Col>
          <Spinner animation="border" role="status" variant="secondary" className="d-block mx-auto">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Col>
      )}
      {props.loading && (
        <Col>
          <Spinner animation="border" role="status" variant="secondary" className="d-block mx-auto">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Col>
      )}
      {props.loading && (
        <Col>
          <Spinner animation="border" role="status" variant="secondary" className="d-block mx-auto">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Col>
      )}
      {props.loading && (
        <Col>
          <Spinner animation="border" role="status" variant="secondary" className="d-block mx-auto">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Col>
      )}

      {props.error && (
        <Alert variant="danger">{props.errorMsg ? props.errorMsg : "Errore...Questa volta non è colpa mia :("}</Alert>
      )}

      {props.movies.slice(0, 6).map((movie) => (
        <Col xs={6} md={3} lg={2} key={movie.imdbID}>
          {/* {props.loading && (
            <Spinner animation="border" role="status" variant="secondary" className="d-block mx-auto">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )} */}
          <div className="position-relative d-inline-block">
            <a href="#">
              <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
            </a>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default MoviesRow;
