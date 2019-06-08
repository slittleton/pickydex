import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentPokemonData, currentPokeSearch } from "../../actions";

class FavoritesList extends Component {
  navToPokeMon = pokemon => {
    let selectedPokemon = { [pokemon]: this.props.allPokemonData[pokemon] };

    this.props.setCurrentPokemonData(selectedPokemon);
    this.props.currentPokeSearch(pokemon);
  };

  renderList = () => {
    let sortedList = this.props.favoritesList.map(x => x).sort();

    return sortedList.map((pokemon, index) => {
      return (
        <div key={pokemon}>
          <div
            className="pokelist-item"
            onClick={() => this.navToPokeMon(pokemon)}
          >
            {index + 1}. {pokemon} *
          </div>
        </div>
      );
    });
  };
  render() {
    const { pokemonList } = this.props;
    if (pokemonList) {
      return (
        <div className="favs-pokelist">
          <div className="favs-list-title">Favorites</div>
          <div>{this.renderList()}</div>
        </div>
      );
    }
  }
}


const mapStateToProps = state => {
  return {
    pokemonList: state.pokeReducer.pokemonList,
    allPokemonData: state.pokeReducer.allPokemonData,
    favoritesList: state.pokeReducer.favoritesList
  };
};

export default connect(
  mapStateToProps,
  { setCurrentPokemonData, currentPokeSearch }
)(FavoritesList);