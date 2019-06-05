import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addPokemonToList,
  delPokemonFromList,
  setCurrentPokemonData,
  setPokemonList,
  currentPokeSearch
} from "../actions";
import DisplayInfo from "./display/DisplayInfo";

class Content extends Component {
  async componentDidMount() {
    const { currentPokemonData, searchedForPokemon } = this.props;
    const pokeList = JSON.parse(localStorage.getItem("pokemonList"));
    const pokeData = JSON.parse(localStorage.getItem("allPokemonData"));

    if (pokeList && pokeList.length > 0) {
      await this.props.setPokemonList(pokeList, pokeData);

      if (!currentPokemonData && !searchedForPokemon) {
        this.chooseRandomPokemon();
      }
    }
  }

  addToList = (
    currentPokemonData,
    pokemonList,
    searchedForPokemon,
    allPokemonData
  ) => {
    this.props.addPokemonToList(
      currentPokemonData,
      pokemonList,
      searchedForPokemon,
      allPokemonData
    );
  };

  delFromList = (currentPokemonData, pokemonList, searchedForPokemon, allPokemonData) => {
    this.props.delPokemonFromList(currentPokemonData, pokemonList, searchedForPokemon, allPokemonData);
  };

  chooseRandomPokemon = () => {
    const { pokemonList, allPokemonData } = this.props;
    const random = pokemonList[Math.floor(Math.random() * pokemonList.length)];
    const selectedPokemon = { [random]: allPokemonData[random] };

    this.props.setCurrentPokemonData(selectedPokemon);
    this.props.currentPokeSearch(random);
  };
  ///////###### TODO ###### ADD FAVORITE BUTTON FUNCTIONALITY

  renderAddDelButtons = (
    searchedForPokemon,
    currentPokemonData,
    pokemonList,
    allPokemonData
  ) => {
    if (currentPokemonData && !pokemonList.includes(searchedForPokemon)) {
      return (
        <div className="fav-btn-wrapper">
          <button className="fav-btn">Favorite</button>
          <div className="btn-wrapper">
            <button
              onClick={() =>
                this.addToList(
                  currentPokemonData,
                  pokemonList,
                  searchedForPokemon,
                  allPokemonData
                )
              }
              className="result-btn add-btn"
            >
              Add To List
            </button>
          </div>
        </div>
      );
    }
    if (currentPokemonData && pokemonList.includes(searchedForPokemon)) {
      return (
        <div className="fav-btn-wrapper">
          <button className="fav-btn">Favorite</button>

          <div className="btn-wrapper del-wrapper">
            <button
              onClick={() => this.delFromList(currentPokemonData, pokemonList, searchedForPokemon, allPokemonData)}
              className="result-btn del-btn"
            >
              Delete From List
            </button>
          </div>
        </div>
      );
    }
  };

  render() {
    const {
      searchedForPokemon,
      currentPokemonData,
      pokemonList,
      allPokemonData
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
          {this.renderAddDelButtons(
            searchedForPokemon,
            currentPokemonData,
            pokemonList,
            allPokemonData
          )}
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
    allPokemonData: state.pokeReducer.allPokemonData
  };
};

export default connect(
  mapStateToProps,
  {
    addPokemonToList,
    delPokemonFromList,
    setCurrentPokemonData,
    setPokemonList,
    currentPokeSearch
  }
)(Content);
