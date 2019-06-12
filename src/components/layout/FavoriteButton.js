import React from 'react'
import { connect } from 'react-redux';
import {favoritePokemon} from '../../actions';

const favorite = (searchedForPokemon, favoritesList, favoritePokemon) => {
  // console.log('favorite-------', favoritePokemon)
  if(favoritesList.includes(searchedForPokemon)){

    ///////// TODO DELETE FROM FAVORITES 
    ///////// RETURN BUTTON TO NORMAL IF IT SAYS UNFAVORITE
  } else {

    favoritePokemon(searchedForPokemon, favoritesList)
    /////////// TODO SHOW FAVORITE BUTTON AS YELLOW WITH STAR 
    ////////// CHANGE BUTTON TEXT TO "UNFAVORITE"
  }

}

const FavoriteButton = (props) => {
  const { searchedForPokemon, favoritesList,favoritePokemon } = props;
    // console.log('fav', props)
  return (
    <div className="fav-btn-wrapper">
      <button className="fav-btn" onClick={()=> favorite(searchedForPokemon, favoritesList, favoritePokemon)}>Favorite</button>
    </div>
  )
}
export default connect(null, {favoritePokemon})(FavoriteButton)