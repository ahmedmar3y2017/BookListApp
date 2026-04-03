import * as Yup from "yup";

export const addBookSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number()
    .positive("Price must be a positive number")
    .required("Price is required"),
});
