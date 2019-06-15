import { SET_TRAINERS_LIST } from "../actions/actionTypes";

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
    default: return state
  }
}