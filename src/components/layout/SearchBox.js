import React, { Component } from "react";
import { connect } from "react-redux";
import {
  currentPokeSearch,
  setCurrentPokemonData
} from "../../actions";
import { withRouter } from "react-router-dom";

class SearchBox extends Component {
  state = {
    searchTerm: "",
    species: "",
    abilities: "",
    height: "",
    id: "",
    types: [],
    weight: "",
    moves: [],
    locations: [],
    sprite: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.props.currentPokeSearch(this.state.searchTerm);

    const { pokemonList } = this.props;

    // Check if Pokemon is already in Pokemon List retrieved from Local Storage
    let check = this.checkListForPokemon(pokemonList);

    if (check) {
      // set current pokemon data to value pulled from local storage
      await this.props.setCurrentPokemonData(check);
      this.props.history.push("/");
    } else if (check === false) {
      // make api call to get pokemon data
      await this.getPokemonFromApi(this.state.searchTerm);

      let pokemonData = {
        [this.state.species]: this.state
      };

      await this.props.setCurrentPokemonData(pokemonData);
      this.props.history.push("/");
    }
  };

  checkListForPokemon = pokemonList => {
    for (let i = 0; i < pokemonList.length; i++) {
      // Check if Pokemon is already in Pokemon List retrieved from Local Storage
      if (pokemonList[i].species === this.state.searchTerm) {
        return pokemonList[i];
      }
    }
    return false;
  };

  getPokemonFromApi = async pokemonName => {
    // URLS For Making Call To Api's
    const pokemonInfoUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
    const pokemonLocationsUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/encounters`;
    // const pokemonImgUrl = `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=images&titles=${pokemonName}`;
    // const pokemonImgUrl = `https://en.wikipedia.org/wiki/${pokemonName}#/media/File:Pok%C3%A9mon_${pokemonName}_art.png`;
    const receivedInfo = await this.fetchData(pokemonInfoUrl);
    const receivedLocations = await this.fetchData(pokemonLocationsUrl);
    this.infoToLocalstate(receivedInfo);
    this.locationsToLocalState(receivedLocations);
  };

  // Convert Raw data to usable local state data
  infoToLocalstate = data => {
    // General Pokemon Info
    this.setState({
      species: data.species.name,
      abilities: data.abilities.map(x => x.ability.name),
      height: data.height,
      id: data.id,
      types: data.types.map(x => x.type.name),
      weight: data.weight,
      moves: data.moves.map(x => x.move.name),
      sprite: data.sprites.front_default,
      foundInList: false
    });
  };

  locationsToLocalState = data => {
    this.setState({ locations: data.map(elem => elem.location_area.name) });
  };

  fetchData = async url => {
    const response = await fetch(url);
    let data = null;
    await response
      .json()
      .then(res => (data = res))
      .catch(err => console.log(err));
    return data;
  };

  render() {
    return (
      <div className="search-box" onSubmit={this.handleSubmit}>
        <form className="search-box-form">
          <input
            type="text"
            className="search-box-input"
            placeholder="Enter Pokemon Name"
            name="searchTerm"
            onChange={this.onChange}
            value={this.state.value}
          />
          <button className="search-box-button">Search</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPokemon: state.pokeReducer.searchedForPokemon,
    currentPokemonData: state.pokeReducer.currentPokemonData,
    pokemonList: state.pokeReducer.pokemonList
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      currentPokeSearch,
      setCurrentPokemonData
    }
  )(SearchBox)
);
