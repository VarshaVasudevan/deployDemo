import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Header } from '../Header/Header';
import Footer from '../Footer/Footer';

const PurchaseSuccess = () => {
  
    return (
        <div>
            <Header />
        <div className="success-screen">
          <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
          <h2 className="success-heading">Purchase Successful</h2>
          <p className="success-message">Thank you for your purchase!</p>
        </div>
        <Footer />
        </div>
      );
  
}

export default PurchaseSuccess