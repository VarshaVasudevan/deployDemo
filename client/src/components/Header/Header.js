import {React} from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Products/productSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartDropDown from './CartDropDown';
import { useState,useEffect} from 'react';
import WishListDropDown from './WishListDropDown';


export const Header = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  useEffect(() => {
    if (status === 'idle') {
        dispatch(fetchProducts());
    }
}, [dispatch, status]);

  

  const [isCartVisible, setCartVisibility] = useState(false);
  const [isWishVisible, setWishVisibility] = useState(false);
  
  const cartVisible = () => {
    // Show the cart dropdown on mouse over
    setCartVisibility(true);
  };

  const cartInvisible = () => {
    // Hide the cart dropdown on mouse out
    setCartVisibility(false);
  };
  const wishListVisible = () => {
    // Show the cart dropdown on mouse over
    setWishVisibility(true);
  };
  const wishListInvisible = () => {
    // Show the cart dropdown on mouse over
    setWishVisibility(false);
  };

return (
  <div id="header">
    <Link to="/"><img src={process.env.PUBLIC_URL + '/images/th.jpeg'} alt="logo" className="logo" /></Link>
    <div>
      <InputGroup className="mb-3">
        <Form.Control type="text" className='text' placeholder="What are you looking for?" />
        <div className="icon-group">
          <FontAwesomeIcon
            icon={faSearch}
            className="fa-search"
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'black';
              e.target.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = 'black';
            }}
          />
          <Link to="/login">
            <FontAwesomeIcon icon={faUser} className="fa-user" />
          </Link>
          <Link to="/wishlist" onMouseOver={wishListVisible} onMouseOut={wishListInvisible}>
          <FontAwesomeIcon icon={faHeart} className="fa-heart" />
          {isWishVisible&& <WishListDropDown cartDetails={products}/>}
          </Link>
          
          <Link to="/cart" onMouseOver={cartVisible} onMouseOut={cartInvisible}>
          <FontAwesomeIcon icon={faShoppingCart} className="fa-shopping-cart" id="cart-dropdown"  />
          {isCartVisible && <CartDropDown cartDetails={products} />}
          </Link>
        </div>
      </InputGroup>
    </div>
  </div>
);
}
