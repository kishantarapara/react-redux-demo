import { CakeStoreType } from "./Cake/cakeReducer";
import { IceCreamStoreType } from "./IceCream/iceCreamReducer";
import { UserStoreType } from "./User/userReducer";

export interface eventType {
  type: string;
  payload: any;
}

export interface StoreType {
  cake: CakeStoreType;
  iceCream: IceCreamStoreType;
  user: UserStoreType;
}

export { buyCake } from "./Cake/cakeAction";
export { buyIceCream } from "./IceCream/iceCreamAction";

export type { CakeStoreType } from "./Cake/cakeReducer";
export type { IceCreamStoreType } from "./IceCream/iceCreamReducer";
