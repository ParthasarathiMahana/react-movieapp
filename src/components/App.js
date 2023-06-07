import React from "react";
import {data} from '../data';
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";

class App extends React.Component {

componentDidMount(){
  const {store} = this.props;
  store.subscribe(()=>{
    // console.log("Updated.");
    this.forceUpdate();
  });

  store.dispatch(addMovies(data));

  console.log(this.props.store.getState());
}

  isMovieFavourite = (movie) =>{
    const {favourites} = this.props.store.getState();

    const index = favourites.indexOf(movie);

    if(index !== -1){
      return true;
    }
    return false;
  }

  render(){
    const listOfMovies = this.props.store.getState().list;
    console.log(this.props.store.getState());
    return (
      <div className="App">
        <Navbar/>
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {listOfMovies.map((movie, index)=>(
              <MovieCard movie={movie} key={index} dispatch={this.props.store.dispatch} isFavourite = {this.isMovieFavourite(movie)}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
