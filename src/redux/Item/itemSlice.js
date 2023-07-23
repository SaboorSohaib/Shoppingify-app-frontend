import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import url from '../url';

export const getItemsThunk = createAsyncThunk('item/getItemsThunk', async (categoryId) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${url}categories/${categoryId}/items`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const items = response.data ?? [];
    return { categoryId, items };
  } catch (error) {
    toast.error(error);
    throw new Error('Failed to fetch items');
  }
});

const itemSlice = createSlice({
  name: 'items',
  initialState: { items: [], itemsByCategory: {}, status: 'idle' },
  extraReducers: (builder) => {
    builder.addCase(getItemsThunk.fulfilled, (state, action) => {
      const { categoryId, items } = action.payload;
      state.itemsByCategory[categoryId] = items;
      state.status = 'success';
    });
  },
});

export default itemSlice.reducer;
