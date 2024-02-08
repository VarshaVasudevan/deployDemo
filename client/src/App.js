import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import './style.css'
import Login from './components/Login/Login';
import Products from './components/Products/Products';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import PurchaseSuccess from './components/PurchaseSuccess/PurchaseSuccess';


function App() {
  return (
    <Router>
       
        {/* Use Switch to wrap your Route components */}
        <Routes>
            {/* Route for the home page */}
            <Route  path="/" element={<Home/> }/>

            {/* Route for the login page */}
            <Route path="/login" element={<Login />} />

            {/* Route for the products page */}
            <Route path="/products" element={<Products />} />

            {/* Route for the cart page */}
            <Route path="/cart" element={<Cart />} />

            {/*Rpute for the Product success page*/}
            <Route path="/purchasesuccess" element={<PurchaseSuccess />} />
            
        </Routes>
    </Router>
);
}

export default App;
