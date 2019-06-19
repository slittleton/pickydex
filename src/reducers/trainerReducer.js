import { SET_CURRENT_TRAINER } from "../actions/actionTypes";

const initialState = {
  currentTrainer: [],

}
export default (state=initialState, action)=> {
  switch (action.type) {
    case SET_CURRENT_TRAINER: {
      return {
        ...state,
        currentTrainer: action.payload
      }
    }
    default: return state
  }
}