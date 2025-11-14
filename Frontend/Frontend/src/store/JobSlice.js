// src/features/itemsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create an asynchronous thunk for fetching data
export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const response = await fetch(`${import.meta.env.VITE_FOS_CLIENT_API}/jobs`); // Replace with your API endpoint
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data; // Return the fetched data
});

// Create the slice
const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    loading: false,
    error: null,
    
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true; // Set loading to true while fetching
        state.error = null; // Clear any previous errors
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false once data is fetched
        state.items = action.payload; // Store the fetched items in state
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false; // Set loading to false if there's an error
        state.error = action.error.message; // Capture the error message
      });
  },
});

// Export the reducer
export default itemsSlice.reducer;
