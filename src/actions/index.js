import {
  CURRENT_SEARCHED_POKEMON,
  CURRENT_POKEMON_DATA,
  ADD_POKEMON_TO_LIST,
  SET_POKEMON_LIST_FROM_LOCAL,
  DEL_POKEMON_FROM_LIST,
  FAVORITES_LIST,
  SET_FAVORITES_LIST_FROM_LOCAL
} from "./actionTypes";

export const currentPokeSearch = searchTerm => (dispatch, getState) => {
  dispatch({ type: CURRENT_SEARCHED_POKEMON, payload: searchTerm });
};

export const setCurrentPokemonData = data => (dispatch, getState) => {
  dispatch({ type: CURRENT_POKEMON_DATA, payload: data });
};
export const setPokemonList = (pokeList, pokeData, favList) => (dispatch, getState) => {
  let data = { pokeList, pokeData, favList };

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


export const delPokemonFromList = (currentPokemonData, pokemonList, searchedForPokemon, allPokemonData) => (
  dispatch,
  getState
) => {

    let newPokemonList = pokemonList.filter(item => item !== searchedForPokemon);

    let newPokemonDataSet = {...allPokemonData};
    delete newPokemonDataSet[searchedForPokemon];

    localStorage.setItem("pokemonList", JSON.stringify(newPokemonList));
    localStorage.setItem("allPokemonData", JSON.stringify(newPokemonDataSet));

    let data = { newPokemonList, newPokemonDataSet}
    dispatch({ type: DEL_POKEMON_FROM_LIST, payload: data });

};

export const favoritePokemon = (
  searchedForPokemon, favoritesList
) => (dispatch, getState) => {

  let favsList = favoritesList.map(x => x);
  favsList.unshift(searchedForPokemon);

  // Update Redux Store and Local Storage List
  localStorage.setItem("favoritesList", JSON.stringify(favsList));

  dispatch({ type: FAVORITES_LIST, payload: favsList });
};

export const unfavoritePokemon = (searchedForPokemon, favoritesList) => (dispatch, getState) => {
  let newfavslist = favoritesList.filter(item => item !== searchedForPokemon)

  dispatch({ type: FAVORITES_LIST, payload: newfavslist})
}

export const setFavsList = (favsList)=> (dispatch, getState) => {
    dispatch({ type: SET_FAVORITES_LIST_FROM_LOCAL, payload: favsList });
}
