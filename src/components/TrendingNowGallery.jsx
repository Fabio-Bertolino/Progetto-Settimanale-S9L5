import { Component } from "react";
import SingleMovie from "./SingleMovie";

class TrendingNowGallery extends Component {
  state = {
    movies: [],
  };

  fetchMovies = async () => {
    try {
      console.log("fetching data...");
      const resp = await fetch("http://www.omdbapi.com/?apikey=a56825d6&s=Harry");
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
        <SingleMovie movies={this.state.movies} />
      </div>
    );
  }
}

export default TrendingNowGallery;
