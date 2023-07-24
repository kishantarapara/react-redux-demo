import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { CakeStoreType } from "./Cake/cakeReducer";
import { IceCreamStoreType } from "./IceCream/iceCreamReducer";
import { UserStoreType } from "./User/userReducer";

export interface StoreType {
  cake: CakeStoreType;
  iceCream: IceCreamStoreType;
  user: UserStoreType;
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
