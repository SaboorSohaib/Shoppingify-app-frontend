import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import url from '../url';

export const getCategoriesThunk = createAsyncThunk('category/getCategoriesThunk', async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${url}categories`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    const data = response.data ?? [];
    return data;
  } catch (error) {
    toast.error(error);
    throw new Error('Failed to fetch categories');
  }
});

const categorySlice = createSlice({
  name: 'categories',
  initialState: { categories: [], status: 'idle' },
  extraReducers: (builder) => {
    builder.addCase(getCategoriesThunk.fulfilled, (state, action) => {
      state.status = 'success';
      state.categories = action.payload;
    });
  },
});

export default categorySlice.reducer;
