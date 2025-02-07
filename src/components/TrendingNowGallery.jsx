import { Component } from "react";
import SingleMovie from "./SingleMovie";

class TrendingNowGallery extends Component {
  state = { movies: [] };

  fetchMovies = async () => {
    try {
      console.log("fetching data...");
      const resp = await fetch("http://www.omdbapi.com/?apikey=a56825d6&s=Harry");
      if (resp.ok) {
        const movies = await resp.json();
        console.log(movies);
        this.setState({ movies: movies });
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
    return <SingleMovie movieInfo={this.state.movies} />;
  }
}

export default TrendingNowGallery;
