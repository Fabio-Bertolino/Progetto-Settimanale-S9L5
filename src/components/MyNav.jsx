import { Container, Nav, Navbar } from "react-bootstrap";
import { Search, BellFill } from "react-bootstrap-icons";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";

function MyNav(props) {
  return (
    <Navbar expand="lg" bg="black" data-bs-theme="dark" className="sticky-top">
      <Container>
        <Navbar.Brand href={props.homeLink} className="text-secondary">
          <Navbar.Brand href={props.homeLink}>
            <img src={props.logo} alt={props.claim} width="115" height="45" className="img-fluid" />
          </Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-0">
            <Nav.Link href={props.homeLink} className="fw-semibold">
              Home
            </Nav.Link>
            <Nav.Link href={props.tvShowsLink} className="fw-semibold" active>
              TvShows
            </Nav.Link>
            <Nav.Link href={props.moviesLink} className="fw-semibold">
              Movies
            </Nav.Link>
            <Nav.Link href={props.recentlyAddedLink} className="fw-semibold">
              RecentlyAdded
            </Nav.Link>
            <Nav.Link href={props.myListLink} className="fw-semibold">
              MyList
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center ms-auto text-white">
            <Button variant="outline-light" size="sm" className="border-0">
              <Search />
            </Button>
            {/* checkbox bootstrap react non funziona come intendo*/}
            <input type="checkbox" className="btn-check" id="btn-check-outlined" />
            <label className="btn btn-outline-light btn-sm text-uppercase border border-0" htmlFor="btn-check-outlined">
              Kids
            </label>
            <br />
            <Button variant="outline-light" size="sm" className="border-0">
              <BellFill />
            </Button>
            <Dropdown as={ButtonGroup} align="end" title="Dropdown end" id="dropdown-menu-align-end">
              <Button variant="outline-black" size="sm" className="border-0">
                <img src={props.profilePic} alt="Profile" className="img-fluid" width="45px" height="45px" />
              </Button>
              <Dropdown.Toggle split variant="outline-light border-0" size="sm" id="dropdown-split-end" />

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile settings</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Preferences</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Switch profile</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Log-Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
