import React, { useState } from "react";
import { StoreType, buyCake, buyIceCream } from "../redux";
import { Dispatch } from "redux";
import { connect } from "react-redux";

interface ItemContainerOwnProps {
  cake?: boolean;
}
interface ItemContainerProps extends ItemContainerOwnProps {
  noOfItems: number;
  buyItem: (item: number) => void;
}

const ItemContainer = (props: ItemContainerProps) => {
  const { cake, noOfItems, buyItem } = props;
  const [itemCount, setItemCount] = useState<number>(0);
  return (
    <div>
      <h2>Item: {cake ? "Cake" : "Ice Cream"}</h2>
      <h2>No. Of Item: {noOfItems}</h2>
      <input
        type="number"
        onChange={(e) => setItemCount(parseInt(e.target.value))}
      />
      <button onClick={() => buyItem(itemCount)}>Buy Item</button>
    </div>
  );
};

const mapStatesToProps = (
  state: StoreType,
  ownProps: ItemContainerOwnProps
) => {
  const noOfItems = ownProps.cake
    ? state.cake.noOfCakes
    : state.iceCream.noOfIceCreams;
  return {
    noOfItems,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch,
  ownProps: ItemContainerOwnProps
) => {
  const buyItem = ownProps.cake
    ? (num: number) => dispatch(buyCake(num))
    : (num: number) => dispatch(buyIceCream(num));

  return {
    buyItem,
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(ItemContainer);
