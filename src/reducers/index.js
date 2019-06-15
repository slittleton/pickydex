import { combineReducers } from 'redux';
import pokeReducer from './pokeReducer';
import trainerReducer from './trainerReducer';

export default combineReducers ({
  pokeReducer,
  trainerReducer
})