import React from "react";

const toUpperCase = word => {
  let text = word.split("");
  text[0] = text[0].toUpperCase();
  text = text.join("");
  return text;
};

const DisplayInfo = props => {
  const { currentPokemonData, searchedForPokemon } = props;
  const info = currentPokemonData[searchedForPokemon];

  
  if (info) {
    return (
      <div>
        <div className="title-sprite">
          <div className="title">
            {info.species ? toUpperCase(info.species) : null}
          </div>
          <div className="poke-pic">
            <div className="search-result-sprite">
              <img src={info.sprite} alt="!#" className="sprite" />
            </div>
          </div>
        </div>
        <div className="search-result-info">
          <hr />
          <div className="attribute">
            <span className="attribute-title">Species: </span>
            {info.species}
          </div>
          <div className="attribute">
            <span className="attribute-title">Type(s): </span>
            {info.types.join(", ")}
          </div>
          <div className="attribute">
            <span className="attribute-title">Abilities: </span>
            {info.abilities.join(", ")}
          </div>
          <div className="attribute">
            <span className="attribute-title">Height: </span>
            {parseInt(info.height) * 10} cm
          </div>
          <div className="attribute">
            <span className="attribute-title">Weight: </span>
            {info.weight / 10} kg
          </div>

          <hr />
          <div className="attribute">
            <span className="attribute-title">Encounter Locations: </span>
            {info.locations.join(", ")}
          </div>

          <hr />
          <div className="attribute">
            <span className="attribute-title">Moves: </span>
            {info.moves.join(", ")} kg
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default DisplayInfo;
