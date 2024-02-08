import React, { useState,useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
//import { useDispatch,useSelector } from 'react-redux';
//import { selectUserID } from '../User/userSlice';
//import { setuserID } from '../User/userSlice';
import axios from 'axios';

function LoginForm() {
  //const dispatch = useDispatch();
  const [mobileNumber, setMobileNumberLocal] = useState('');
  const[user,setUser]=useState([])
  const navigate = useNavigate();
  //const userID = useSelector(selectUserID);

  const handleLogin = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/checkLogin', {
    mobile: mobileNumber,
  }) 
  .then(response => {

    // Check if the response status is 200
    if (response.status === 200) {
      
      const userId = response.data.data._id; 
      console.log(userId)
      //dispatch(setuserID(userId))
      localStorage.setItem('userID', userId);
      //setUser(userId);
      alert("Login successful");
      navigate("/products")
      //alert(response.data.message); 
    } else {
      alert("Invalid Number"); // Show an error message
    }
  })
  .catch(error => {
    console.error('Error',error); 
    
  });
		 

    // Dispatch the setMobileNumber action with the entered mobile number
    // dispatch(setMobileNumber(mobileNumber));
    // console.log(mobileNumber)
    // navigate('/products')
    // Perform login logic or dispatch async thunk to check login
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumberLocal(event.target.value); // Update local state with the entered mobile number
  };

  
  

  return (
    <div>
      <form className='loginform'>
        <h3>Login/Register to your account</h3>
        <h6>
          Lorem ipsum dolor sit amet consectetur. Sapien ut libero sed lacinia
          egestas placerat ut sagittionec.
        </h6>
        <div className='input-container'>
          <input type='text' name='mobileNumber' value={mobileNumber} onChange={handleMobileNumberChange}
        placeholder="Enter Mobile Number" className='responsive-input'/>
          
          <label
            htmlFor='textInput'
            style={{ marginLeft: '15rem', marginTop: '2rem' }}
          >
            OR
          </label>
        </div>
        <div>
          <button className='google-button'>
            <FaGoogle style={{ marginRight: '1rem' }} />
            Login with Google
          </button>
        </div>
        <div>
          <button className='apple-button'>
            <FontAwesomeIcon
              icon={faApple}
              className='apple-icon'
              style={{ marginRight: '1rem' }}
            />
            Sign in wih apple
          </button>
        </div>
        <button className='otp'  onClick={handleLogin}>
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
