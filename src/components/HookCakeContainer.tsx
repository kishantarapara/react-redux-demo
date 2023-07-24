import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";
import { StoreType } from "../redux/store";

const HookCakeContainer = () => {
  const noOfCakes = useSelector((state: StoreType) => state.cake.noOfCakes);
  const dispatch = useDispatch();
  const [cakeCount, setCakeCount] = useState<number>(0);

  return (
    <div>
      <h2>Number of cakes - {noOfCakes} </h2>
      <input
        type="number"
        onChange={(e) => {
          setCakeCount(parseInt(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(buyCake(cakeCount));
        }}
      >
        Buy Cake
      </button>
    </div>
  );
};

export default HookCakeContainer;
