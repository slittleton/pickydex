import React from "react";
import { connect } from "react-redux";
import {
  addPokemonToList,
  delPokemonFromList
} from "../../actions";
import FavoriteButton from './FavoriteButton';

const addToList = (
  currentPokemonData,
  pokemonList,
  searchedForPokemon,
  allPokemonData,
  addPokemonToList
) => {
  addPokemonToList(
    currentPokemonData,
    pokemonList,
    searchedForPokemon,
    allPokemonData
  );
};

const delFromList = (
  currentPokemonData,
  pokemonList,
  searchedForPokemon,
  allPokemonData,
  delPokemonFromList
) => {
  delPokemonFromList(
    currentPokemonData,
    pokemonList,
    searchedForPokemon,
    allPokemonData
  );
};

const AddAndDelButtons = props => {
  const {
    searchedForPokemon,
    currentPokemonData,
    pokemonList,
    allPokemonData,
    favoritesList,
    addPokemonToList,
    delPokemonFromList
  } = props.data;

  if (currentPokemonData && !pokemonList.includes(searchedForPokemon)) {
    return (
      <div>
        <div className="fav-btn-wrapper">
          <button className="fav-btn">Favorite</button>
        </div>
        <div className="btn-wrapper">
          <button
            onClick={() =>
              addToList(
                currentPokemonData,
                pokemonList,
                searchedForPokemon,
                allPokemonData,
                addPokemonToList
              )
            }
            className="result-btn add-btn"
          >
            Add To List
          </button>
        </div>
      </div>
    );
  } else if (currentPokemonData && pokemonList.includes(searchedForPokemon)) {
    return (
      <div>
        <FavoriteButton searchedForPokemon={searchedForPokemon} favoritesList={favoritesList}/>
        <div className="btn-wrapper del-wrapper">
          <button
            onClick={() =>
              delFromList(
                currentPokemonData,
                pokemonList,
                searchedForPokemon,
                allPokemonData,
                delPokemonFromList
              )
            }
            className="result-btn del-btn"
          >
            Delete From List
          </button>
        </div>
      </div>
    );
  } else {
    return <div>Something went wrong???????</div>;
  }
};

export default connect(
  null,
  {
    addPokemonToList,
    delPokemonFromList
  }
)(AddAndDelButtons);
