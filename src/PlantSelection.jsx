import PLANTS from "./data";
import "./Plants.css";

export default function PlantSelection({ plants, addToCart }) {
  return (
    <section className="plants">
      {plants.map((plant) => (
        <ol key={plant.id}>
          <p className="plantEmoji">{plant.image}</p>
          <p>{plant.name}</p>
          <button
            className="addToCartButton"
            onClick={(e) => {
              e.preventDefault();
              addToCart(plant);
            }}
          >
            Add Plant to Cart
          </button>
        </ol>
      ))}
    </section>
  );
}
