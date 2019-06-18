import { SET_TRAINERS_LIST, SET_CURRENT_TRAINER } from "../actions/actionTypes";

const initialState = {
  trainersList: [],
  currentTrainer: '',

}
export default (state=initialState, action)=> {
  switch (action.type) {
    case SET_TRAINERS_LIST:
      return {
        ...state,
        trainersList: action.payload
      }
    case SET_CURRENT_TRAINER: {
      return {
        ...state,
        currentTrainer: action.payload
      }
    }
    default: return state
  }
}