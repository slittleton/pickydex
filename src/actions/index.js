import {
  CURRENT_SEARCHED_POKEMON,
  CURRENT_POKEMON_DATA,
  ADD_POKEMON_TO_LIST,
  SET_POKEMON_LIST_FROM_LOCAL,
  DEL_POKEMON_FROM_LIST
} from "./actionTypes";

export const currentPokeSearch = searchTerm => (dispatch, getState) => {
  dispatch({ type: CURRENT_SEARCHED_POKEMON, payload: searchTerm });
};

export const setCurrentPokemonData = data => (dispatch, getState) => {
  dispatch({ type: CURRENT_POKEMON_DATA, payload: data });
};
export const setPokemonList = (pokeList, pokeData) => (dispatch, getState) => {
  let data = { pokeList, pokeData };

  dispatch({ type: SET_POKEMON_LIST_FROM_LOCAL, payload: data });
};

export const addPokemonToList = (
  currentPokemonData,
  pokemonList,
  searchedForPokemon,
  allPokemonData
) => (dispatch, getState) => {
  let newList = pokemonList.map(x => x);
  newList.unshift(searchedForPokemon);

  let newDataSet = { ...allPokemonData, ...currentPokemonData };

  // Update Redux Store and Local Storage List
  localStorage.setItem("pokemonList", JSON.stringify(newList));
  localStorage.setItem("allPokemonData", JSON.stringify(newDataSet));

  dispatch({
    type: ADD_POKEMON_TO_LIST,
    payload: { currentPokemonData, searchedForPokemon }
  });
};

////////////////////////////////////////////////////////////////////////////////////
///////////////////////######## TODO ############# FIX DELETE /////////////////////
////////////////////////////////////////////////////////////////////////////////////
export const delPokemonFromList = (currentPokemonData, pokemonList, searchedForPokemon, allPokemonData) => (
  dispatch,
  getState
) => {

    let newPokemonList = pokemonList.filter(item => item !== searchedForPokemon);

    let newPokemonDataSet = {...allPokemonData};
    delete newPokemonDataSet[searchedForPokemon];

    // console.log(newPokemonDataSet)
    localStorage.setItem("pokemonList", JSON.stringify(newPokemonList));
    localStorage.setItem("allPokemonData", JSON.stringify(newPokemonDataSet));

    let data = { newPokemonList, newPokemonDataSet}
    dispatch({ type: DEL_POKEMON_FROM_LIST, payload: data });

};
