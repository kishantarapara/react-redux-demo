export interface eventType {
  type: string;
  payload: any;
}

export { buyCake } from "./Cake/cakeAction";
export { buyIceCream } from "./IceCream/iceCreamAction";
export * from "./User/userAction";
