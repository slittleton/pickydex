import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTrainersList } from '../actions';

class Landing extends Component {
  async componentDidMount() {
    // const trainersList = JSON.parse(localStorage.getItem("trainers"));

    const trainersList = ['Picky', 'Ash', 'Misty']

    if( trainersList ){
      await this.props.setTrainersList(trainersList);
    }

  }

  trainersList(trainersList){

    if(trainersList){
      return trainersList.map(trainer => {
      return (
      <div key={trainer}>
        {trainer}
      
      </div>)
    })
      
      
    }

  }


  render() {
    return (
      <div>
        <div>Select A Trainer</div>
        {this.trainersList(this.props.trainersList)}
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log(state, "Landing");
  return {
    trainersList: state.trainerReducer.trainersList,
    currentTrainer: state.trainerReducer.currentTrainer
  }
  
}

export default  connect(mapStateToProps, { setTrainersList })(Landing)

/*
retreive saved trainers and show list 
  -make each trainer a link that selects it as currentTrainer and sends user Home
also display add new trainer link
if no saved trainers only show add new trainer link
set last selected trainer to default trainer
*/