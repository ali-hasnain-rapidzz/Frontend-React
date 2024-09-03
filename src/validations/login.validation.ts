import * as Yup from "yup";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("This field is required!"),
  password: Yup.string().required("This field is required!"),
});

export default loginValidationSchema;
