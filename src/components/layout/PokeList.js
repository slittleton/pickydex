import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentPokemonData, currentPokeSearch } from "../../actions";

class PokeList extends Component {
  navToPokeMon = pokemon => {
    let selectedPokemon = { [pokemon]: this.props.allPokemonData[pokemon] };

    this.props.setCurrentPokemonData(selectedPokemon);
    this.props.currentPokeSearch(pokemon);
  };

  renderList = () => {
    let sortedList = this.props.pokemonList.map(x => x).sort();

    return sortedList.map((pokemon, index) => {
      return (
        <div key={pokemon}>
          <div
            className="pokelist-item"
            onClick={() => this.navToPokeMon(pokemon)}
          >
            {index + 1}. {pokemon}
          </div>
        </div>
      );
    });
  };
  render() {
    const { pokemonList } = this.props;
    if (pokemonList) {
      return (
        <div className="pokelist">
          <div className="list-title">Pokemon List</div>
          <div>{this.renderList()}</div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    pokemonList: state.pokeReducer.pokemonList,
    allPokemonData: state.pokeReducer.allPokemonData
  };
};

export default connect(
  mapStateToProps,
  { setCurrentPokemonData, currentPokeSearch }
)(PokeList);
