import { useCartContext } from "~/CartContext";
import { CartItem } from "~/components/CartItem/CartItem";

export default function Cart() {
  const { items, removeFromCart } = useCartContext();

  return (
    <div>
      <h1>Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {items.map((movie) => (
            <CartItem
              movie={movie}
              key={movie.id}
              onRemove={() => {
                removeFromCart(movie.id);
              }}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
