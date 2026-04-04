import React from "react";

const BookInfo = ({ isLoggedIn, bookSelected }) => {
  const book = bookSelected ? (
    <>
      <h2 class="text-2xl font-bold text-center">Book Details</h2>

      <div>
        <p class="text-gray-500 text-sm">Title</p>
        <p class="text-lg font-semibold">{bookSelected?.title || "N/A"}</p>
      </div>

      <div>
        <p class="text-gray-500 text-sm">Description</p>
        <p class="text-gray-700">{bookSelected?.description || "N/A"}</p>
      </div>

      <div>
        <p class="text-gray-500 text-sm">Price</p>
        <p class="text-lg font-semibold text-green-600">
          ${bookSelected?.price || "N/A"}
        </p>
      </div>

      <div class="flex justify-between pt-4">
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          disabled={!isLoggedIn}
        >
          Edit
        </button>
      </div>
    </>
  ) : (
    <div class="text-center text-gray-500">
      <p class="text-lg">Select a book to see details</p>
    </div>
  );

  return (
    <div class=" bg-gray-100 flex items-center justify-center p-6">
      <div class="bg-white shadow-lg rounded-2xl max-w-lg w-full p-6 space-y-4">
        {book}
      </div>
    </div>
  );
};

export default BookInfo;
