import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentTrainer } from "../actions";

class Landing extends Component {
  state = {
    newTrainerName: ''
  }
  async componentDidMount() {
    const trainer = JSON.parse(localStorage.getItem("trainer"));

    

    if (trainer) {
      await this.props.setCurrentTrainer(trainer);
    }
  }

  loginTrainer(trainer) {
    this.props.setCurrentTrainer(trainer);

    this.props.history.push("/");
  }
  changeTrainerName() {
    ////////////////////////////////////////////////////////////
    //////////////////// TODO ADD NEW TRAINER ////////////////////
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handlesubmit = e => {
    e.preventDefault()
    
    this.loginTrainer(this.state.newTrainerName);
  }

  render() {
    return (
      <div className="landing ">
        <div className="trainer-title">Change Trainer Name</div>
        <div className="trainer-item">
          Current Trainer Name: {this.props.currentTrainer}
        </div>
        <div className="centering-box">
          <form onSubmit={this.handlesubmit}>
            <input
              className="trainer-input"
              placeholder="New Trainer Name"
              name="newTrainerName"
              onChange={this.onChange}
              value={this.state.newTrainerName}
            />
            <div className="centering-box">
              <button className="trainer-btn">Submit</button>
            </div>
          </form>
        </div>
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
  { setCurrentTrainer }
)(Landing);

/*
if no saved trainers only show add new trainer link
set last selected trainer to default trainer
*/
