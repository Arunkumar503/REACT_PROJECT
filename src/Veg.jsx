import React, { useState } from 'react';
import './Veg.css';

function Veg() {
    const [quantities, setQuantities] = useState({
        paneerButterMasala: 0,
        palakPaneer: 0,
        chanaMasala: 0,
        vegBiryani: 0,
        alooGobi: 0,
        vegKorma: 0
    });

     const [cart, setCart] = useState({});

    const prices = {
        paneerButterMasala: 250,
        palakPaneer: 200,
        chanaMasala: 180,
        vegBiryani: 220,
        alooGobi: 150,
        vegKorma: 230
    };

    const increase = (item) => {
        setQuantities(prev => ({ ...prev, [item]: prev[item] + 1 }));
    };

    const decrease = (item) => {
        setQuantities(prev => ({ ...prev, [item]: Math.max(prev[item] - 1, 0) }));
    };

    // Add item to cart from quantities
    const addToCart = (item) => {
        const qty = quantities[item];
        if (qty === 0) {
            alert('Please increase quantity before adding to cart.');
            return;
        }
        setCart(prevCart => {
            // Add or update quantity for item in cart
            const newQty = (prevCart[item] || 0) + qty;
            return { ...prevCart, [item]: newQty };
        });

         setQuantities(prev => ({ ...prev, [item]: 0 }));
    };

     const totalPrice = Object.entries(cart).reduce(
        (total, [item, qty]) => total + prices[item] * qty,
        0
    );

     const placeOrder = () => {
        if (Object.keys(cart).length === 0) {
            alert('Your cart is empty!');
            return;
        }

        let orderDetails = 'Your order:\n';
        Object.entries(cart).forEach(([item, qty]) => {
            const name = item.replace(/([A-Z])/g, ' $1').trim();
            orderDetails += `${qty} x ${name} = ₹${prices[item] * qty}\n`;
        });
        orderDetails += `Total Price: ₹${totalPrice}`;

        alert(orderDetails);

         setCart({});
    };

    return (
        <>
            <div className="v1">
                <h1>VEG</h1>

                <div className='veg'>
                    <div className='v2'>
                        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4SasHdleS0RVuVvSn-r4YYe7rW54VBZbd_HNg1E6-Dh0JsCFwaSHdUImEfh0-e-jgJJHMg7wVpRUeKK5Q4Zr8-cZg6IHLFUwvX5LJnBexj6i2t1cy6LGVy9Jb5D8E2NSpjWRtxWLE4AU/s2048/paneer+butter+masala+18.JPG" alt="Paneer Butter Masala" />
                        <h2>Paneer Butter Masala</h2>
                        <p>Price: ₹250</p>
                        <button onClick={() => decrease('paneerButterMasala')}>-</button>
                        <span>{quantities.paneerButterMasala}</span>
                        <button onClick={() => increase('paneerButterMasala')}>+</button>
                        <button onClick={() => addToCart('paneerButterMasala')}>Add to Cart</button>
                    </div>

                    <div className='v3'>
                        <img src="https://c.ndtvimg.com/2020-02/b494imko_palak-paneer_625x300_04_February_20.jpg" alt="Palak Paneer" />
                        <h2>Palak Paneer</h2>
                        <p>Price: ₹200</p>
                        <button onClick={() => decrease('palakPaneer')}>-</button>
                        <span>{quantities.palakPaneer}</span>
                        <button onClick={() => increase('palakPaneer')}>+</button>
                        <button onClick={() => addToCart('palakPaneer')}>Add to Cart</button>
                    </div>

                    <div className='v4'>
                        <img src="https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-chana-masala-1705955784.jpg" alt="Chana Masala" />
                        <h2>Chana Masala</h2>
                        <p>Price: ₹180</p>
                        <button onClick={() => decrease('chanaMasala')}>-</button>
                        <span>{quantities.chanaMasala}</span>
                        <button onClick={() => increase('chanaMasala')}>+</button>
                        <button onClick={() => addToCart('chanaMasala')}>Add to Cart</button>
                    </div>
                </div>

                <div className='v8'>
                    <div className='v5'>
                        <img src="https://assets.gqindia.com/photos/5edf897e0f82d6d3cee5f0a7/16:9/w_1920,c_limit/veg-biryani-recipes.jpg" alt="Vegetable Biryani" />
                        <h2>Vegetable Biryani</h2>
                        <p>Price: ₹220</p>
                        <button onClick={() => decrease('vegBiryani')}>-</button>
                        <span>{quantities.vegBiryani}</span>
                        <button onClick={() => increase('vegBiryani')}>+</button>
                        <button onClick={() => addToCart('vegBiryani')}>Add to Cart</button>
                    </div>

                    <div className='v6'>
                        <img src="https://thecurryculture.ca/wp-content/uploads/2020/12/Aloo-Ghobi.jpg" alt="Aloo Gobi" />
                        <h2>Aloo Gobi</h2>
                        <p>Price: ₹150</p>
                        <button onClick={() => decrease('alooGobi')}>-</button>
                        <span>{quantities.alooGobi}</span>
                        <button onClick={() => increase('alooGobi')}>+</button>
                        <button onClick={() => addToCart('alooGobi')}>Add to Cart</button>
                    </div>

                    <div className='v7'>
                        <img src="https://limethyme.com/wp-content/uploads/2020/10/Vegetable-Korma-09-2-683x1024.jpg" alt="Vegetable Korma" />
                        <h2>Vegetable Korma</h2>
                        <p>Price: ₹230</p>
                        <button onClick={() => decrease('vegKorma')}>-</button>
                        <span>{quantities.vegKorma}</span>
                        <button onClick={() => increase('vegKorma')}>+</button>
                        <button onClick={() => addToCart('vegKorma')}>Add to Cart</button>
                    </div>
                </div>

                 <div className="cart">
                    <h2>Your Cart</h2>
                    {Object.keys(cart).length === 0 ? (
                        <p>Cart is empty.</p>
                    ) : (
                        <>
                            <ul>
                                {Object.entries(cart).map(([item, qty]) => (
                                    <li key={item}>
                                        {item.replace(/([A-Z])/g, ' $1').trim()}: {qty} x ₹{prices[item]} = ₹{qty * prices[item]}
                                    </li>
                                ))}
                            </ul>
                            <h3>Total: ₹{totalPrice}</h3>
                            <button onClick={placeOrder}>Place Order</button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Veg;
