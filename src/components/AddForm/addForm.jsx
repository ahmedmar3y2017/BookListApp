import React, { use, useRef } from "react";
import { useDispatch } from "react-redux";
import { insertBook } from "../../store/bookSlice";

const AddForm = () => {
  // 1 - useRef solution
  const title = useRef(null);
  const price = useRef(null);
  const desc = useRef(null);

  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const bookData = {
      title: title.current.value,
      price: price.current.value,
      description: desc.current.value,
    };

    dispatch(insertBook(bookData));
  };

  return (
    <div class="flex justify-center items-center bg-gray-100 p-6">
      <form
        class="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4"
        onSubmit={handleSubmitForm}
      >
        <h2 class="text-2xl font-bold text-center">Add Book</h2>

        <div>
          <label class="block mb-1 font-medium">Title</label>
          <input
            ref={title}
            type="text"
            name="title"
            placeholder="The book2"
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label class="block mb-1 font-medium">Description</label>
          <textarea
            ref={desc}
            name="description"
            placeholder="A classic American novel"
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label class="block mb-1 font-medium">Price</label>
          <input
            ref={price}
            type="number"
            name="price"
            placeholder="30"
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddForm;
