import { BUY_BEER } from "./beerTypes";

export const buyBeer = (number = 1) => {
  return {
    type: BUY_BEER,
    payload: number,
  };
};
