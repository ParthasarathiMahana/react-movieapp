import React from "react";
import {data} from '../data';
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";
import {setShowFavourites} from "../actions";

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

  changeTab = (val) =>{
    this.props.store.dispatch(setShowFavourites(val))
  }

  render(){
    // const listOfMovies = this.props.store.getState().list;
    const {list, favourites, showFavourites} = this.props.store.getState();
    const showIt = showFavourites?favourites:list;
    console.log(this.props.store.getState());
    return (
      <div className="App">
        <Navbar/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites? '':'active-tabs'}`} onClick={()=>this.changeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites?'active-tabs':''}`} onClick={()=>this.changeTab(true)}>Favourites</div>
          </div>
          <div className="list">
            {showIt.map((movie, index)=>(
              <MovieCard 
              movie={movie} 
              key={index} 
              dispatch={this.props.store.dispatch} 
              isFavourite = {this.isMovieFavourite(movie)}/>
            ))}
          </div>
          {showIt.length === 0?<div className="no-movies">NO Movies Available.</div>: null}
        </div>
      </div>
    );
  }
}

export default App;
