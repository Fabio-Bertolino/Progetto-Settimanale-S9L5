import "./App.css";
import MyNav from "./components/MyNav";
import GalleryPage from "./components/GalleryPage";
import MyFooter from "./components/MyFooter";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="bg-black">
        <MyNav
          logo="../src/assets/img/netflix_logo.png"
          logoAlt="Netflix logo"
          homeLink="#"
          tvShowsLink="#"
          moviesLink="#"
          recentlyAddedLink="#"
          myListLink="#"
          profilePic="../src/assets/img/avatar.png"
        />
        <GalleryPage />
        <MyFooter />
      </div>
    );
  }
}

export default App;
