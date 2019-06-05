import {
  CURRENT_SEARCHED_POKEMON,
  CURRENT_POKEMON_DATA,
  ADD_POKEMON_TO_LIST,
  SET_POKEMON_LIST_FROM_LOCAL,
  DEL_POKEMON_FROM_LIST
} from '../actions/actionTypes';

const initialState = {
  pokemonList: [],
  searchedForPokemon: '',
  currentPokemonData: '',
  allPokemonData: {}
}

export default (state=initialState, action) => {
  switch(action.type) {
    case CURRENT_SEARCHED_POKEMON:
      return { 
        ...state,
        searchedForPokemon: action.payload 
      };
    case CURRENT_POKEMON_DATA:
    return {
      ...state,
      currentPokemonData: action.payload
    };
    case ADD_POKEMON_TO_LIST:
    const {searchedForPokemon, currentPokemonData } = action.payload
    return {
      ...state,
      pokemonList: [...state.pokemonList, searchedForPokemon],
      allPokemonData:{ ...state.allPokemonData, ...currentPokemonData }

    }
    case SET_POKEMON_LIST_FROM_LOCAL:
    return {
      ...state,
      pokemonList: action.payload.pokeList,
      allPokemonData: action.payload.pokeData
    }
    
    case DEL_POKEMON_FROM_LIST:
    return{
      ...state,
      pokemonList: action.payload.newPokemonList,
      allPokemonData: action.payload.newPokemonDataSet
    }
    default: return state;
  }
}