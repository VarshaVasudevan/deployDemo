import React from 'react';
import { FaCcVisa, FaPaypal } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>IMPORTANT LINKS</h3>
        <ul>
          <li><a href="#">Help & FAQ</a></li>
          <li><a href="#">Shopping & delivery</a></li>
          <li><a href="#">Order History</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>ABOUT US</h3>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Our store</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>MORE INFORMATION</h3>
        <ul>
          <li><a href="#">My Account</a></li>
          <li><a href="#">Offer zone</a></li>
          <li><a href="#">Off Voucher</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>SOCIAL MEDIAS</h3>
        <ul>
          <li><a href="#">PAYMENT METHODS</a></li>
          <li><a href="#"><FaCcVisa size={30} color="blue" />
      <FaPaypal size={30} color="blue" /></a></li>
          
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
