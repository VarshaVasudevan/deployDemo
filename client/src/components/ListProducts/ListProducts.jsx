import React, { useEffect } from 'react';
import {useSelector,useDispatch } from 'react-redux';
import { fetchProducts } from '../Products/productSlice';
import { addToCart,decreaseQuantity } from '../CartList/cartSlice'
import { Link } from 'react-router-dom';
import { selectCart } from '../CartList/cartSlice';
import axios from 'axios';
//import { selectUserID } from '../User/userSlice';

const ListProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const userId = localStorage.getItem('userID');
  
 console.log(userId)
  const cart = useSelector(selectCart);
  
  const x=useSelector((state)=>state.cart.cart)
  
  

  useEffect(() => {
    if (status === 'idle') {
        dispatch(fetchProducts());
    }
}, [dispatch, status]);

const handleAddToCart = (productId, price) => {
  console.log(price); // Corrected typo here

  // Make Axios request to insert cart item
  axios.post('http://localhost:5000/add-to-cart', { userId, productId, quantity: 1, price })
    .then((response) => {
      // Handle successful response (optional)
      console.log(response.data);
    })
    .catch((error) => {
      // Handle error (optional)
      console.error(error);
    });
}

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity({ productId }));
    console.log('Cart:', cart);
  };


  return (
    <div>
      
      <div className="mobile-grid">
      {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error loading products</p>}
            {status === 'succeeded' &&
        products.map((product) => (
          <div key={product._id} className="mobile-item">
            <img src={process.env.PUBLIC_URL + `/images/${product.image}.webp`} alt='image' />
            <div>
              <strong>{product.type}</strong>
              <Link><strong>{product.name}</strong></Link>
              <div>
              <button className='add-cart' onClick={() => handleAddToCart(product._id,product.price)}>+</button>
              <button className='remove-cart' onClick={() => handleDecreaseQuantity(product._id)}>-</button>
              </div>
            </div>
            <div>
            {product.memory}
            </div>
            <div style={{'fontWeight':'bold'}}>
              Rs.{product.price.toFixed(2)}
            </div>
           
          </div>
        ))}
      </div>

     
      
    </div>
  );
}

export default ListProducts