import { Component } from "react";
import MoviesRow from "./MoviesRow";

class GalleryRow extends Component {
  state = {
    movies: [],
  };

  fetchMovies = async () => {
    try {
      console.log("fetching data...");
      const resp = await fetch("http://www.omdbapi.com/?apikey=a56825d6&s=" + this.props.movieSearch);
      if (resp.ok) {
        const moviesObj = await resp.json();
        console.log(moviesObj);
        this.setState({ movies: moviesObj.Search });
      } else {
        throw new Error("Errore nella fetch dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <div>
        <h2 className="text-light fs-4 pt-4 pb-2" id="New-releases">
          {this.props.movieSearch}
        </h2>
        <MoviesRow movies={this.state.movies} />
      </div>
    );
  }
}

export default GalleryRow;
