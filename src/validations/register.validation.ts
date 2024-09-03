import * as Yup from "yup";

const registerValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "The name must be between 3 and 20 characters.")
    .max(20, "The name must be between 3 and 20 characters.")
    .required("This field is required!"),
  email: Yup.string()
    .email("This is not a valid email.")
    .required("This field is required!"),
  password: Yup.string()
    .min(6, "The password must be between 6 and 40 characters.")
    .max(40, "The password must be between 6 and 40 characters.")
    .required("This field is required!"),
});
export default registerValidationSchema;
