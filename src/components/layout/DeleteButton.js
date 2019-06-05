// import React from 'react'
// import { addPokemonToList, setPokemonList } from "../../actions";
// import { connect } from "react-redux";

//   const delFromList = async (props) => {
//     console.log('props', props);
//     const { currentPokemonData, pokemonList } = props;

//     for(let i = 0; i < pokemonList.length; i++){
//       if (currentPokemonData.species === pokemonList[i].species){
//         let newPokeList = pokemonList.filter(pokemon => pokemon.species !== currentPokemonData.species)

//         localStorage.setItem("pokemonList", JSON.stringify(newPokeList));
//         props.setPokemonList(newPokeList)
//         props.history.push(props.navPath)
//       }
//     }
//   }

//  const DeleteButton = (props) => {
//   const {currentPokemonData, pokemonList} = props
  
//   return (
//     <div className="fav-del-wrapper">
//     <div className="fav-btn-wrapper">
//       <button className="fav-btn">Favorite</button>
//     </div>
//     <div className="btn-wrapper del-wrapper">
//       <button
//         onClick={() => delFromList(currentPokemonData, pokemonList)}
//         className="result-btn del-btn"
//       >
//         Delete From List
//       </button>
//     </div>
//   </div>
//   )
// }
// const mapStateToProps = state => {
//   console.log(state, "logged from mapStateToProps");
//   return {
//     searchedForPokemon: state.pokeReducer.searchedForPokemon,
//     currentPokemonData: state.pokeReducer.currentPokemonData,
//     pokemonList: state.pokeReducer.pokemonList
//   };
// };
// export default connect(
//   mapStateToProps,{ 
//     addPokemonToList, 
//     setPokemonList
//   }
// )(DeleteButton);