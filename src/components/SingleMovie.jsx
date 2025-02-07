import { Row, Col } from "react-bootstrap";

function SingleMovie(props) {
  return (
    <Row>
      {props.movies.Search.slice(0, 6).map((movie) => (
        <Col xs={6} md={3} lg={2} key={movie.imdbID}>
          <div className="position-relative d-inline-block">
            <a href="#">
              <img src={movie.Poster} alt="" className="img-fluid" />
            </a>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default SingleMovie;
