import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import gear from "../../img/gear-white.png";

const Trainer = props => {
  return (
    <div className="trainer">
      <Link to="/trainer" className="landing-link">
        <img src={gear} alt="pokeball" className="settings-pic" />
      </Link>
      <div className="trainer-name">Trainer: {props.currentTrainer}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentTrainer: state.trainerReducer.currentTrainer
  };
};
export default connect(mapStateToProps)(Trainer);
