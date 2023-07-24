import React from "react";
import { Provider } from "react-redux";

import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";

import "./App.css";
import HookCakeContainer from "./components/HookCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
