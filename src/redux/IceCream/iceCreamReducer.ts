import { BUY_ICECREAM } from "./iceCreamTypes";
import { eventType } from "..";

export interface IceCreamStoreType {
  noOfIceCreams: number;
}

const initialState: IceCreamStoreType = {
  noOfIceCreams: 20,
};

const iceCreamReducer = (
  state: IceCreamStoreType = initialState,
  action: eventType
) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - action.payload,
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
