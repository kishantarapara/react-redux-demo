import { BUY_ICECREAM } from "./iceCreamTypes";

export const buyIceCream = (num = 1) => {
  return {
    type: BUY_ICECREAM,
    payload: num,
  };
};
