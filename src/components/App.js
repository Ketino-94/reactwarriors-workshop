import React from "react";
import movies from "./movies";
import MovieItem from "./MovieItem";
import FavouriteMovie from "./FavouriteMovie";

function LikeCounts({ likeCounts }) {
  return <p>Количество лайков: {likeCounts} </p>;
}
function FavouriteCounts({favCounts}) {
  return <p>Количество избранных фильмов: {favCounts}</p>;
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: movies,
      likeCounts: 0,
      favCounts: 0,
      favouriteMovie : []
    };
  }

  increaseLike = () => {
    this.setState({
      likeCounts: this.state.likeCounts + 1
    });
  };

  decreaseLike = () => {
    this.setState({
      likeCounts: this.state.likeCounts - 1
    });
  };

  favMovie = () => {
    this.setState({
      favCounts: this.state.favCounts + 1
    });
  };

  unfavMovie = () => {
    this.setState({
      favCounts: this.state.favCounts - 1
    });
  };

  addFavourite = (id) => {
    this.state.favouriteMovie.push(id)
  }

  render() {
    const { movies, likeCounts , favCounts, favouriteMovie } = this.state;
    console.log(favouriteMovie)
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <LikeCounts likeCounts={likeCounts} />
              <FavouriteCounts favCounts={favCounts} />
            </div>
          </div>
          <div className="row">
           <div className="col-8">
             <div className="row">
              {movies.map((movie, index) => {
                return (
                  <div key={index} className="col-6 mb-4">
                    <MovieItem
                      addFavourite={this.addFavourite}
                      item={movie}
                      increaseLike={this.increaseLike}
                      decreaseLike={this.decreaseLike}
                      favMovie={this.favMovie}
                      unfavMovie={this.unfavMovie}
                    />
                  </div>
                );
              })}
              </div>
            </div>
             <div className="col-4">
             {favouriteMovie.map((item, index) => {
               return (
                 <div key={index} className="col-12">
                 <ul>
                   <FavouriteMovie
                      item={item}
                   />
                   </ul>
                 </div>
               );
             })}
             </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
