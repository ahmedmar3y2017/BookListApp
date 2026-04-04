import React, { use, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertBook } from "../../store/bookSlice";
import { useFormik } from "formik";
import { addBookSchema } from "../../util/AddFormValidation";

const AddForm = () => {
  const auth = useSelector((state) => state.auth); // to trigger re-render on auth state change
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

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(JSON.stringify(values));

      try {
        await dispatch(insertBook(values)).unwrap(); // throws error if rejected
        resetForm(); // reset form only on success
      } catch (error) {
        console.error("Error adding book:", error);
      }
    },
    validationSchema: addBookSchema,
    validateOnBlur: true,
    validateOnChange: true,
  });

  useEffect(() => {
    if (!formik.values.title) formik.setFieldValue("title", "Title Dummy");
  }, []);

  return (
    <div class="flex justify-center items-center bg-gray-100 p-6">
      <form
        class="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4"
        onSubmit={formik.handleSubmit}
      >
        <h2 class="text-2xl font-bold text-center">Add Book</h2>

        <div>
          <label class="block mb-1 font-medium">Title</label>
          <input
            // ref={title}
            type="text"
            name="title"
            placeholder="The book2"
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            isInvalid={formik.touched.title && formik.errors.title}
            autoComplete="off"
          />
          {/* Error message */}
          {formik.touched.title && formik.errors.title && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.title}</p>
          )}
        </div>

        <div>
          <label class="block mb-1 font-medium">Description</label>
          <textarea
            // ref={desc}
            name="description"
            placeholder="A classic American novel"
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            isInvalid={formik.touched.description && formik.errors.description}
            autoComplete="off"
          ></textarea>
          {/* Error message */}
          {formik.touched.description && formik.errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.description}
            </p>
          )}
        </div>

        <div>
          <label class="block mb-1 font-medium">Price</label>
          <input
            // ref={price}
            type="number"
            name="price"
            placeholder="30"
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
            isInvalid={formik.touched.price && formik.errors.price}
            autoComplete="off"
          />
          {/* Error message */}
          {formik.touched.price && formik.errors.price && (
            <p className="text-red-500 text-sm mt-1">{formik.errors.price}</p>
          )}
        </div>

        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          disabled={formik.isSubmitting || !formik.isValid || !auth.isLoggedIn}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddForm;
