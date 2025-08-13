import "./Cart.css";

export default function Cart({ cart, increment, decrement }) {
  if (!cart.length === 0) {
    return (
      <section>
        <p>Cart</p>
        <p>Cart is empty!</p>
      </section>
    );
  }

  return (
    <section>
      <p>Cart</p>
      <ul>
        {cart.map((plant) => (
          <li key={plant.id}>
            <p>
              {plant.image}
              {plant.name}
            </p>
            <p className="buttons">
              <span>
                <button onClick={() => decrement(plant.id)}>-</button>
              </span>{" "}
              {plant.quantity}{" "}
              <span>
                <button onClick={() => increment(plant.id)}>+</button>
              </span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
