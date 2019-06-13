import React from 'react'
import { connect } from 'react-redux';
import {favoritePokemon, unfavoritePokemon} from '../../actions';

const favorite = (searchedForPokemon, favoritesList, favoritePokemon) => {
    favoritePokemon(searchedForPokemon, favoritesList)
}
const unfavorite = (searchedForPokemon, favoritesList, unfavoritePokemon)=>{
  unfavoritePokemon(searchedForPokemon, favoritesList)
}

const FavoriteButton = (props) => {
  const { searchedForPokemon, favoritesList,favoritePokemon, unfavoritePokemon } = props;

  if(!favoritesList.includes(searchedForPokemon)){
    return (
      <div className="fav-btn-wrapper">
        <button className="fav-btn" onClick={()=> favorite(searchedForPokemon, favoritesList, favoritePokemon)}>Favorite</button>
      </div>
    )
  }

  if(favoritesList.includes(searchedForPokemon)){
    return (
      <div className="fav-btn-wrapper">
        <button className="unfav-btn" onClick={()=> unfavorite(searchedForPokemon, favoritesList, unfavoritePokemon)}>Unfavorite</button>
      </div>
    )
  }

}
export default connect(null, {favoritePokemon, unfavoritePokemon})(FavoriteButton)