import "./index.css";
import { useState } from "react";
import PLANTS from "./data";
import PlantSelection from "./PlantSelection";
import Cart from "./Cart";

export default function App() {
  const [plants] = useState(PLANTS);
  const [cart, setCart] = useState([]);
  // console.log(plants);

  const addToCart = (plant) => {
    const inCart = cart.find((item) => item.id === plant.id);
    if (!inCart) {
      const item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    } else {
      setCart(
        cart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  };
  // console.log(addToCart());
  const increment = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  //alternative
  //   const decreaseQuantity = (id) => {
  //   const plant = cart.find(item => item.id === id)
  //   plant.quantity--;
  //   const allOtherPlant = cart.filter(item => item.id !== id)
  //   if( plant.quantity === 0){
  //       setCart([...allOtherPlant])
  //   }else{
  //       setCart([...allOtherPlant, ...plant])
  //   }
  // }

  return (
    <>
      <header>
        <h1>Proper Plants</h1>
      </header>
      <main>
        <PlantSelection plants={plants} addToCart={addToCart} />
        <Cart cart={cart} increment={increment} decrement={decrement} />
      </main>
    </>
  );
}
