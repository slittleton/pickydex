import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addPokemonToList,
  delPokemonFromList,
  setCurrentPokemonData,
  setPokemonList,
  currentPokeSearch,
  favoritePokemon,
  setFavsList
} from "../actions";
import DisplayInfo from "./display/DisplayInfo";
import AddAndDelButtons from './layout/AddAndDelButtons';

class Content extends Component {
  async componentDidMount() {
    const { currentPokemonData, searchedForPokemon } = this.props;
    const pokeList = JSON.parse(localStorage.getItem("pokemonList"));
    const pokeData = JSON.parse(localStorage.getItem("allPokemonData"));
    const favList = JSON.parse(localStorage.getItem("favoritesList"))

    if (pokeList && pokeList.length > 0) {
      await this.props.setPokemonList(pokeList, pokeData);

      if (!currentPokemonData && !searchedForPokemon) {
        this.chooseRandomPokemon();
      }
    }
    if( favList && favList.length > 0){
      await this.props.setFavsList(favList)
    }

  }

  chooseRandomPokemon = () => {
    const { pokemonList, allPokemonData } = this.props;
    const random = pokemonList[Math.floor(Math.random() * pokemonList.length)];
    const selectedPokemon = { [random]: allPokemonData[random] };

    this.props.setCurrentPokemonData(selectedPokemon);
    this.props.currentPokeSearch(random);
  };
 

  render() {
    const {
      searchedForPokemon,
      currentPokemonData
    } = this.props;
    return (
      <div>
        <div className="info">
          <div className="pokemon-info">
            <DisplayInfo
              currentPokemonData={currentPokemonData}
              searchedForPokemon={searchedForPokemon}
            />
          </div>
        </div>

        <div className="results-buttons">
          <AddAndDelButtons data={this.props}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, "logged from mapStateToProps");
  return {
    searchedForPokemon: state.pokeReducer.searchedForPokemon,
    currentPokemonData: state.pokeReducer.currentPokemonData,
    pokemonList: state.pokeReducer.pokemonList,
    allPokemonData: state.pokeReducer.allPokemonData,
    favoritesList: state.pokeReducer.favoritesList
  };
};

export default connect(
  mapStateToProps,
  {
    addPokemonToList,
    delPokemonFromList,
    setCurrentPokemonData,
    setPokemonList,
    currentPokeSearch,
    favoritePokemon,
    setFavsList
  }
)(Content);
