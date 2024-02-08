import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  userID: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setuserID: (state, action) => {
      state.userID = action.payload;
    },
    // other reducers...
  },
});

const persistConfig = {
  key: 'user',
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userSlice.reducer);

export const selectUser = (state) => state.user.user;
export const selectUserID = (state) => state.user.userID; // Changed to selectUserID
export const { setuserID } = userSlice.actions;

export default persistedUserReducer;
