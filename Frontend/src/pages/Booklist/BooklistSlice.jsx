import { createSlice } from '@reduxjs/toolkit';

const booklistSlice = createSlice({
  name: 'booklist',
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book._id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booklistSlice.actions;

export default booklistSlice.reducer;