import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState({items: {}, price: 0}); 

  const updateCart = (index) => {
    const item = bakeryData[index];
    const name = item.name; 
    const updatedCart = cart.items; 
    if (updatedCart[name]) {
      updatedCart[name] += 1
    } 
    else {
      updatedCart[name] = 1
    }
    const updatedPrice = cart.price + item.price
    setCart({items: updatedCart, price: updatedPrice})
    console.log(cart.items)
    console.log(cart.price)
  }

  return (
    <div className="App">
      <h1>Bakery 1300</h1> {/* TODO: personalize your bakery (if you want) */}
      <p class="subtext">Add items to your cart and check out your cart below!</p> 

      <div class="root">
        <div class="flex"> 
          {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <BakeryItem item={item} updateCart={updateCart} index={index}/>// replace with BakeryItem component
          ))}
        </div> 

        <div class="cart">
          <h2>Cart</h2>
          {Object.keys(cart.items).map((key) => (
              <p>{cart.items[key]}x {key}</p>
          ))}
          <p>Total: ${Math.round(cart.price * 100) / 100}</p>
        </div>
      </div>

    </div>
  );
}

export default App;
