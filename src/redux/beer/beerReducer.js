import { BUY_BEER } from "./beerTypes";

const initialState = {
  numOfBeer: 20,
};

const beerReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BEER:
      return {
        ...state,
        numOfBeer: state.numOfBeer - action.payload,
      };
    default:
      return state;
  }
};
export default beerReducer;
