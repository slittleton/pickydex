import React, { Component } from "react";
import { connect } from "react-redux";
import { setTrainersList } from "../actions";

class Landing extends Component {
  async componentDidMount() {
    // const trainersList = JSON.parse(localStorage.getItem("trainers"));

    const trainersList = ["Picky", "Ash", "Misty"];

    if (trainersList) {
      await this.props.setTrainersList(trainersList);
    }
  }

  loginTrainer(trainer) {}

  trainersList(trainersList) {
    if (trainersList) {
      return (
        <div className="trainer-list-wrapper">
          {trainersList.map((trainer, index) => {
            return (
              <div
                key={index}
                className="trainer-item"
                onClick={() => this.loginTrainer(trainer)}
              >
                {index + 1} {trainer}
              </div>
            );
          })}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="landing ">
        <div className="trainer-title">Select A Trainer</div>
        <div className="trainer-list-box">{this.trainersList(this.props.trainersList)}</div>
        <div className="centering-box">
          <div className="trainer-google"> Login With Google </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state, "Landing");
  return {
    trainersList: state.trainerReducer.trainersList,
    currentTrainer: state.trainerReducer.currentTrainer
  };
};

export default connect(
  mapStateToProps,
  { setTrainersList }
)(Landing);

/*
retreive saved trainers and show list 
  -make each trainer a link that selects it as currentTrainer and sends user Home
also display add new trainer link
if no saved trainers only show add new trainer link
set last selected trainer to default trainer
*/
