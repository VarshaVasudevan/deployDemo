// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Products/productSlice';
import userReducer from '../User/userSlice';
import cartReducer from '../CartList/cartSlice'

const store = configureStore({
    reducer: {
        products: productReducer,
        user:userReducer,
        cart:cartReducer,
        // Add other reducers if needed
    },
});

export default store;
