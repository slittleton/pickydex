import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentTrainer } from "../actions";

class Landing extends Component {
  state = {
    newTrainerName: ""
  };

  loginTrainer(trainer) {
    this.props.setCurrentTrainer(trainer);
    this.props.history.push("/");
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handlesubmit = e => {
    e.preventDefault();
    this.loginTrainer(this.state.newTrainerName);
  };
  renderTrainer = () => {
    const trainer = this.props.currentTrainer;
    if (trainer.length > 0) {
      return (
        <div>
          <div className="trainer-title">Change Trainer Name</div>
          <div className="trainer-item">
            Current Trainer Name: {this.props.currentTrainer}
          </div>
          <div className="centering-box">
          <form onSubmit={this.handlesubmit}>
            <input
              className="trainer-input"
              placeholder="Enter Trainer Name"
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
    if (trainer.length === 0) {
      return(
        <div>
          <div className="message">Looks like you don't have a trainer name yet.</div>
          <div className="trainer-title">What would you like to be called?</div>
          <div className="centering-box">
          
          <form onSubmit={this.handlesubmit}>
            <input
              className="trainer-input"
              placeholder="Enter Trainer Name"
              name="newTrainerName"
              onChange={this.onChange}
              value={this.state.newTrainerName}
            />
            <div className="centering-box">
              <button className="trainer-btn">Submit</button>
            </div>
          </form>
        </div>
        </div>
        )
    }
  };

  render() {
    return (
      <div className="landing ">
        {this.renderTrainer()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state, "Landing");
  return {
    currentTrainer: state.trainerReducer.currentTrainer
  };
};

export default connect(
  mapStateToProps,
  { setCurrentTrainer }
)(Landing);
