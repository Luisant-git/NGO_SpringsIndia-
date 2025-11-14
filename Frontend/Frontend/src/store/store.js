// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './JobSlice'
import freelancerReducer from './Freelancerslice'

const store = configureStore({
  reducer: {
    items: itemsReducer, // Make sure this line is present
    freelancer: freelancerReducer, // Make sure this line is present
  },
});

export default store;
