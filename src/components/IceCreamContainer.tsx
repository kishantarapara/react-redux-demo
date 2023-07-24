import React, { useState } from "react";
import { StoreType } from "../redux/store";
import { Dispatch } from "redux";
import { buyIceCream } from "../redux/IceCream/iceCreamAction";
import { connect } from "react-redux";

interface IceCreamContainerProps {
  noOfIceCreams: number;
  buyIceCream: (num: number) => void;
}

const IceCreamContainer = (props: IceCreamContainerProps) => {
  const { noOfIceCreams, buyIceCream } = props;
  const [iceCreamCount, setIceCreamCount] = useState<number>(0);
  return (
    <div>
      <h2>Number of ice creams - {noOfIceCreams} </h2>
      <input
        type="number"
        onChange={(e) => setIceCreamCount(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          buyIceCream(iceCreamCount);
        }}
      >
        Buy Ice cream
      </button>
    </div>
  );
};

const mapStatesToProps = (state: StoreType) => {
  return {
    noOfIceCreams: state.iceCream.noOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    buyIceCream: (num: number) => dispatch(buyIceCream(num)),
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(IceCreamContainer);
