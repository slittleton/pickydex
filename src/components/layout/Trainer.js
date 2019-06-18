import React  from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const navToLanding = (props) => props.history.push('/')

 const Trainer = (props) => {
    return (
      <div className="trainer">
        <h2>Trainer: {props.currentTrainer}</h2>
        <Link to="/" className="landing-link">Choose another trainer</Link>
      </div>
    )
}

const mapStateToProps = (state) =>{
  return {
    currentTrainer: state.trainerReducer.currentTrainer
  }
}
export default connect(mapStateToProps)(Trainer);
