import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import { List, Grid } from "react-bootstrap-icons";
// import TrendingNowGallery from "./TrendingNowGallery";
// import WatchAgainGallery from "./WhatchAgainGallery";
// import NewReleasesGallery from "./NewReleasesGallery";
import GalleryRow from "./GalleryRow";

function GalleryPage() {
  return (
    <Container className="bg-black text-white">
      <Container fluid className="container d-flex justify-content-between align-items-center pb-2">
        <div className="d-flex align-items-center gap-3 flex-column flex-md-row">
          <h1 className="text-white display-1 fs-1 fw-semibold">TV Shows</h1>
          <DropdownButton
            id="dropdown-basic-button"
            variant="outline-light rounded-0 fw-bold"
            size="sm"
            drop="down-centered"
            title="Genres"
            data-bs-theme="dark"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Comedy</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Horror</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Romance</Dropdown.Item>
            <Dropdown.Item href="#/action-5">Thriller</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Documentary</Dropdown.Item>
          </DropdownButton>
        </div>

        {/*modifica dopo*/}
        <div className="btn-group d-none d-md-block" role="group" aria-label="Vertical radio toggle button group">
          <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1" checked />
          <label className="btn btn-sm btn-outline-light px-3 rounded-0" htmlFor="vbtn-radio1">
            <List />
          </label>
          <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2" />
          <label className="btn btn-sm btn-outline-light px-3 rounded-0" htmlFor="vbtn-radio2">
            <Grid />
          </label>
        </div>
      </Container>
      <Container>
        {/* <h2 className="text-light fs-4 pt-4 pb-2" id="Trending">
          Trending Now
        </h2>
        <TrendingNowGallery />
        <h2 className="text-light fs-4 pt-4 pb-2" id="Re-watch">
          Watch It Again
        </h2>
        <WatchAgainGallery />
        <h2 className="text-light fs-4 pt-4 pb-2" id="New-releases">
          New Releases
        </h2>
        <NewReleasesGallery />
        <h2 className="text-light fs-4 pt-4 pb-2" id="New-releases">
          Experiment
        </h2> */}
        <GalleryRow movieSearch="Harry Potter" />
        <GalleryRow movieSearch="One Piece" />
        <GalleryRow movieSearch="Lord Of The Rings" />
      </Container>
    </Container>
  );
}

export default GalleryPage;
