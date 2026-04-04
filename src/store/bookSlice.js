import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addReport } from "./reportSlice";

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
  async (bookData, { rejectWithValue, getState, dispatch }) => {
    try {
      console.log(getState);

      const state = getState(); // to access current state if needed
      bookData.user = state.auth.user; // example of accessing auth state

      // call another async thunk

      // dispatch(deleteBook({ id: 9 })); // example of calling another thunk (not awaited here)

      const response = await fetch("http://localhost:3005/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });
      // call another action to add a report based on success or failure
      dispatch(
        addReport({ type: "success", message: "Book added successfully!" }),
      ); // dispatch success report
      const data = await response.json();
      return data;
    } catch (error) {
      dispatch(addReport({ type: "error", message: "Failed to add book!" })); // dispatch error report

      return rejectWithValue(error.message);
    }
  },
);

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (book, { rejectWithValue }) => {
    try {
      await fetch(`http://localhost:3005/book/${book.id}`, {
        method: "DELETE",
      });

      return book;
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
      })
      // delete book
      .addCase(deleteBook.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.isLoading = false;
        // console.log("Deleted book with ID:", action.meta.arg); // log deleted book ID
        state.books = state.books.filter((book) => book.id !== action.meta.arg); // remove deleted book from state
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const bookReducer = bookSlice.reducer;
