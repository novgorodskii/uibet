import React from "react";

import CartItem from "../cart-item";
import "./app.sass";

const App = () => {
  return (
    <div className="app">
      <div className="cart">
        <CartItem />
      </div>
    </div>
  );
};
export default App;
