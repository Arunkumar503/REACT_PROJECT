import React, { useState } from 'react';
import './NonVeg.css';

function NonVeg() {
  const [quantities, setQuantities] = useState({
    dish1: 0,
    dish2: 0,
    dish3: 0,
    dish4: 0,
    dish5: 0,
    dish6: 0,
  });

  const [cart, setCart] = useState([]);

  const prices = {
    dish1: 200,
    dish2: 500,
    dish3: 400,
    dish4: 300,
    dish5: 600,
    dish6: 150,
  };

  const dishNames = {
    dish1: "Chicken Biryani",
    dish2: "Fish Curry",
    dish3: "Mutton Rogan Josh",
    dish4: "Chicken Tikka",
    dish5: "Prawn Masala",
    dish6: "Egg Curry",
  };

  const handleQuantityChange = (dishKey, change) => {
    setQuantities(prev => ({
      ...prev,
      [dishKey]: Math.max(0, prev[dishKey] + change)
    }));
  };

  // Add to Cart without resetting quantity
  const handleAddToCart = (dishKey) => {
    const qty = quantities[dishKey];
    if (qty === 0) {
      alert("Please increase quantity before adding to cart.");
      return;
    }

    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.dishKey === dishKey);
      if (existingIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex].quantity += qty;
        return updatedCart;
      } else {
        return [...prevCart, {
          dishKey,
          name: dishNames[dishKey],
          quantity: qty,
          price: prices[dishKey]
        }];
      }
    });
    // Do NOT reset quantities here, user can keep adjusting
  };

  // Place order: confirm order and clear cart + quantities
  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add some dishes before placing an order.");
      return;
    }
    alert(`Order placed successfully!\nTotal amount: ₹${totalPrice}`);
    setCart([]);
    setQuantities({
      dish1: 0,
      dish2: 0,
      dish3: 0,
      dish4: 0,
      dish5: 0,
      dish6: 0,
    });
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <div className="n1">
        <h1>Non-Vegetarian Dishes</h1>

        <div className="n2">
          {/* Dish 1 */}
          <div className="dish1">
            <img src="https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035-1024x683.jpg" alt="Chicken Biryani" />
            <h2>Chicken Biryani</h2>
            <p>Price: ₹200</p>
            <div className="controls">
              <button onClick={() => handleQuantityChange('dish1', -1)}>-</button>
              <span>{quantities.dish1}</span>
              <button onClick={() => handleQuantityChange('dish1', 1)}>+</button>
              <button className="o1" onClick={() => handleAddToCart('dish1')}>Add to Cart</button>
            </div>
          </div>

          {/* Dish 2 */}
          <div className="dish2">
            <img src="https://as1.ftcdn.net/v2/jpg/04/86/31/00/1000_F_486310052_Rmgg6kkKsHyxF6c4Za8ZujcO3nND1aCL.jpg" alt="Fish Curry" />
            <h2>Fish Curry</h2>
            <p>Price: ₹500</p>
            <div className="controls">
              <button onClick={() => handleQuantityChange('dish2', -1)}>-</button>
              <span>{quantities.dish2}</span>
              <button onClick={() => handleQuantityChange('dish2', 1)}>+</button>
              <button className="o1" onClick={() => handleAddToCart('dish2')}>Add to Cart</button>
            </div>
          </div>

          {/* Dish 3 */}
          <div className="dish3">
            <img src="https://www.chefkunalkapur.com/wp-content/uploads/2021/03/Mutton-Roganjosh-scaled.jpg?v=1620401698" alt="Mutton Rogan Josh" />
            <h2>Mutton Rogan Josh</h2>
            <p>Price: ₹400</p>
            <div className="controls">
              <button onClick={() => handleQuantityChange('dish3', -1)}>-</button>
              <span>{quantities.dish3}</span>
              <button onClick={() => handleQuantityChange('dish3', 1)}>+</button>
              <button className="o1" onClick={() => handleAddToCart('dish3')}>Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="n3">
          {/* Dish 4 */}
          <div className="dish4">
            <img src="https://www.allchickenrecipes.com/wp-content/uploads/2018/09/Easy-Chicken-Tikka-Masala-Recipe.jpg" alt="Chicken Tikka" />
            <h2>Chicken Tikka</h2>
            <p>Price: ₹300</p>
            <div className="controls">
              <button onClick={() => handleQuantityChange('dish4', -1)}>-</button>
              <span>{quantities.dish4}</span>
              <button onClick={() => handleQuantityChange('dish4', 1)}>+</button>
              <button className="o1" onClick={() => handleAddToCart('dish4')}>Add to Cart</button>
            </div>
          </div>

          {/* Dish 5 */}
          <div className="dish5">
            <img src="https://rumkisgoldenspoon.com/wp-content/uploads/2022/08/Prawn-masala-recipe.jpg" alt="Prawn Masala" />
            <h2>Prawn Masala</h2>
            <p>Price: ₹600</p>
            <div className="controls">
              <button onClick={() => handleQuantityChange('dish5', -1)}>-</button>
              <span>{quantities.dish5}</span>
              <button onClick={() => handleQuantityChange('dish5', 1)}>+</button>
              <button className="o1" onClick={() => handleAddToCart('dish5')}>Add to Cart</button>
            </div>
          </div>

          {/* Dish 6 */}
          <div className="dish6">
            <img src="https://i.ytimg.com/vi/80pnHP7h8Lw/maxresdefault.jpg" alt="Egg Curry" />
            <h2>Egg Curry</h2>
            <p>Price: ₹150</p>
            <div className="controls">
              <button onClick={() => handleQuantityChange('dish6', -1)}>-</button>
              <span>{quantities.dish6}</span>
              <button onClick={() => handleQuantityChange('dish6', 1)}>+</button>
              <button className="o1" onClick={() => handleAddToCart('dish6')}>Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="cart">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <>
              <ul>
                {cart.map(item => (
                  <li key={item.dishKey}>
                    {item.name} x {item.quantity} = ₹{item.quantity * item.price}
                  </li>
                ))}
              </ul>
              <h3>Total: ₹{totalPrice}</h3>
              {/* <button onClick={clearCart}>Clear Cart</button> */}
              <button onClick={handlePlaceOrder} style={{ marginLeft: "10px" }}>Place Order</button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default NonVeg;
