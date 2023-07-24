import React, { useState } from "react";

import { buyCake } from "../redux";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { StoreType } from "../redux/store";

interface CakeContainerProps {
  noOfCakes: number;
  buyCake: (num: number) => void;
}

const CakeContainer = (props: CakeContainerProps) => {
  const { noOfCakes, buyCake } = props;
  const [cakeCount, setCakeCount] = useState<number>(0);

  return (
    <div>
      <h2>Number of cakes - {noOfCakes} </h2>
      <input
        type="number"
        onChange={(e) => setCakeCount(parseInt(e.target.value))}
      />
      <button onClick={() => buyCake(cakeCount)}>Buy Cake</button>
    </div>
  );
};

const mapStatesToProps = (state: StoreType) => {
  return {
    noOfCakes: state.cake.noOfCakes,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    buyCake: (num: number) => dispatch(buyCake(num)),
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(CakeContainer);
