import React from "react";
import CartItem from "../../ui/cart-item";
import SignUp from "../../ui/sign-up";

import "./app.sass";

const App = () => {
  return (
    <div className="app">
      <div className="cart">
        <CartItem />
      </div>
      <div className="form sign-up">
        <SignUp />
      </div>
    </div>
  );
};
export default App;
