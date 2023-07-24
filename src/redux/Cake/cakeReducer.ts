import { BUY_CAKE } from "./cakeTypes";
import { eventType } from "..";

export interface CakeStoreType {
  noOfCakes: number;
}

const initialState = {
  noOfCakes: 10,
};

const cakeReducer = (
  prevState = initialState,
  action: eventType
): CakeStoreType => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...prevState,
        noOfCakes: prevState.noOfCakes - action.payload,
      };

    default:
      return prevState;
  }
};

export default cakeReducer;
