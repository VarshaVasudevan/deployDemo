import React from 'react'

function WishListDropDown({cartDetails}) {
 
    return (
        <div className="cart-dropdown">
            <h1>Wishlist</h1>
          <ul>
            <table>
            {cartDetails.map((item) => (
              <li key={item._id}>
                <tr>
                    <td>{item.name}<br />{item.memory}-{item.color}<br /><span style={{'fontSize':'20px'}}>Rs.{item.price}</span></td>
                    <td><img src={process.env.PUBLIC_URL + `/images/${item.image}.webp`} alt="${item.image}" /></td>
                </tr>
              </li>
            ))}
            </table>
          </ul>
          <button style={{backgroundColor:'white',color:'black',borderColor:'black',width:'30rem',height:'3rem',marginLeft:'3rem',marginBottom:'2rem'}}>VIEW WISHLIST</button>
          <button style={{backgroundColor:'black',color:'white',borderColor:'white',width:'30rem',height:'3rem',marginLeft:'3rem'}}>ADD TO CART</button>
        </div>
      );
  
}

export default WishListDropDown