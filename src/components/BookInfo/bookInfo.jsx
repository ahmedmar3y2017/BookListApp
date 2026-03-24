import React from "react";

const BookInfo = () => {
  return (
    <div class=" bg-gray-100 flex items-center justify-center p-6">
      <div class="bg-white shadow-lg rounded-2xl max-w-lg w-full p-6 space-y-4">
        <h2 class="text-2xl font-bold text-center">Book Details</h2>

        <div>
          <p class="text-gray-500 text-sm">Title</p>
          <p class="text-lg font-semibold">The book2</p>
        </div>

        <div>
          <p class="text-gray-500 text-sm">Description</p>
          <p class="text-gray-700">A classic American novel</p>
        </div>

        <div>
          <p class="text-gray-500 text-sm">Price</p>
          <p class="text-lg font-semibold text-green-600">$30</p>
        </div>

        <div class="flex justify-between pt-4">
          <button class="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
            Back
          </button>
          <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
