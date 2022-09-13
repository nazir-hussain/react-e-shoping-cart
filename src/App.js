import React, { useState,} from "react";
import Shop from "./component/Shop";
import Navbar from "./component/Navbar";
import Cart from "./component/Cart";
import Footer from "./component/Footer";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Shop handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      <Footer />
    </React.Fragment>
  );
};

export default App;