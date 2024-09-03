import { RegisterContext } from "@Pages/Register/register.context";
import registerValidationSchema from "@Validations/register.validation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";

const Register: React.FC = () => {
  const { register, message, successful } = useContext(RegisterContext) || {};

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  if (!register) {
    return <div>Error: RegisterContext not found</div>;
  }

  return (
    <div className="max-w-md mx-auto p-8">
      <div className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="block mx-auto w-24 h-24 rounded-full object-cover"
        />

        <Formik
          initialValues={initialValues}
          validationSchema={registerValidationSchema}
          onSubmit={register}
        >
          <Form>
            {!successful && (
              <div>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-semibold mb-2">
                    Name
                  </label>
                  <Field
                    name="name"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="mt-2 text-red-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block font-semibold mb-2">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="mt-2 text-red-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block font-semibold mb-2"
                  >
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="mt-2 text-red-500"
                  />
                </div>

                <div className="mb-4">
                  <button
                    type="submit"
                    className="w-full py-2 px-4 text-white font-semibold rounded-md bg-blue-500 hover:bg-blue-600 transition-colors"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            )}

            {message && (
              <div className="mb-4 p-3 rounded-md">
                <div
                  className={
                    successful
                      ? "bg-green-100 text-green-600 border border-green-300"
                      : "bg-red-100 text-red-600 border border-red-300"
                  }
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
