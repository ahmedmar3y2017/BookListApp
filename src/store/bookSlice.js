import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3005/book");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const insertBook = createAsyncThunk(
  "books/insertBook",
  async (bookData, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3005/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      // get books
      .addCase(getBooks.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // insert books
      .addCase(insertBook.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(insertBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books.push(action.payload); // push to state books
        // or insert + previous state value
        // state.books = [...state.books, action.payload];
      })
      .addCase(insertBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const reducer = bookSlice.reducer;
