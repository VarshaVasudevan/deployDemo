import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TotalCart from './TotalCart';

const CartList = () => {
  const [cart, setCart] = useState(null);
  const userId = localStorage.getItem('userID');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.post('http://localhost:5000/fetchCart', {userId });
        console.log(response.data)
        if (response.data.status === 200) {
          setCart(response.data.data[0]);
          console.log(cart) // Assuming the cart data contains an array of items
        } else {
          console.error(response.data.error);
        }
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
      finally {
        setLoading(false); // Update loading state after receiving response or encountering an error
      }
    };

    fetchCartData();
  }, []);

  const calculateTotalPrice = () => {
    if (cart) {
      return cart.items.reduce((total, cartItem) => {
        return total + (cartItem.productId.price * cartItem.quantity);
      }, 0).toFixed(2);
    }
    return 0;
  };
  const totalPrice = calculateTotalPrice();
  console.log(totalPrice)
  
  return (
    <div className="cart-container">
      <h1>Cart</h1>

      {loading ? (
        <p>Loading cart...</p> // Display loading indicator when loading is true
      ) : cart ? (
        <table>
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cart.items.map((cartItem) => (
              <tr key={cartItem.productId._id}>
                <td><img src={process.env.PUBLIC_URL + `/images/${cartItem.productId.image}.webp`} alt={cartItem.productId.name} style={{ width: '50px', height: '50px' }} /></td>
                <td>{cartItem.productId.name}</td>
                <td>${cartItem.productId.price.toFixed(2)}</td>
                <td>{cartItem.quantity}</td>
                <td>${(cartItem.productId.price * cartItem.quantity).toFixed(2)}</td>
              </tr>
            ))}
            {/* Add a row for the buttons */}
            <tr>
              <td colSpan="4">Total</td>
              <td>${calculateTotalPrice()}</td>
            </tr>
            <tr>
              <td colSpan='2'>COUPON CODE</td>
              <td><button className="apply-coupon">APPLY COUPON CODE</button></td>
              <td><button className="update">UPDATE CART</button></td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No items in cart.</p> // Display message when cart is empty
      )}
      <TotalCart  total={totalPrice}/>
    </div>
  );
};

export default CartList;
