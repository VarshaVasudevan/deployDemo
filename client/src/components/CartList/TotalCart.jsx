import React from 'react';
import { Link } from 'react-router-dom';

const TotalCart = ({ total }) => {

  return (
    <div className='cartTotal'>
      <h1 className='total-heading'>Cart Total</h1>
      <table className='total-table'>
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>${total}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>${total}</td>
          </tr>
          <tr>
            <td colSpan='2'>
              <Link to="/purchasesuccess">
                <button className="checkout">PROCEED TO CHECKOUT</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TotalCart;
