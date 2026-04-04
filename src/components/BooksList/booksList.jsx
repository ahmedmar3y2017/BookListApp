import React from "react";
import { deleteBook } from "../../store/bookSlice";

const BooksList = ({
  isLoading,
  books,
  isLoggedIn,
  dispatch,
  setBookSelected,
}) => {
  const booksList =
    books.length > 0 ? (
      books.map((book) => (
        <tr class="hover:bg-gray-50" key={book.id}>
          <td class="p-3">{book.title}</td>
          <td class="p-3 text-center space-x-2">
            <button
              class="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
              onClick={() => setBookSelected(book)}
            >
              Read
            </button>
            <button
              class="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
              disabled={!isLoggedIn}
              onClick={() =>
                dispatch(deleteBook(book))
                  .unwrap()
                  .then((data) =>
                    console.log("Book deleted successfully , data:", data),
                  )
                  .catch((err) => console.error("Delete failed:", err))
              }
            >
              Delete
            </button>
          </td>
        </tr>
      ))
    ) : (
      <p>No books available.</p>
    );

  return (
    <div class="p-6 bg-gray-100">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div class="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-4">
          <h2 class="text-2xl font-bold mb-4 text-center">Book List</h2>

          <div class="overflow-x-auto">
            <table class="w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead class="bg-gray-200 text-gray-700">
                <tr>
                  <th class="p-3 text-left">Title</th>
                  <th class="p-3 text-center">Actions</th>
                </tr>
              </thead>

              <tbody class="divide-y">{booksList}</tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default BooksList;
