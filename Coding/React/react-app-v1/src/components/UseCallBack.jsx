import React, { useState, useCallback } from "react";

export default function UseCallBack() {
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState("");
  const [count, setCount] = useState(0);

  // Memoize the function to avoid creating a new instance on every render
  const addToCart = useCallback(() => {
    if (item.trim()) {
      setCart((prevCart) => [...prevCart, item]);
      setItem(""); // Clear input after adding
    }
  }, [item]); // Only depends on `item`

  return (
    <div>
      <h1>Shopping Cart</h1>
      <input
        type="text"
        placeholder="Add item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={() => setCount(count + 1)}>Update Counter</button>

      <p>Counter: {count}</p>
      <h2>Items in Cart:</h2>
      <ul>
        {cart.map((cartItem, index) => (
          <li key={index}>{cartItem}</li>
        ))}
      </ul>
    </div>
  );
}
