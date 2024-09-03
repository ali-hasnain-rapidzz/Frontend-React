import { LoginContext } from "@Pages/Login/login.context";
import loginValidationSchema from "@Validations/login.validation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const Login: React.FC = () => {
  const loginContext = useContext(LoginContext);

  if (!loginContext) {
    return <div>Error: AuthContext not found</div>;
  }

  const { redirect, loading, message, handleLogin } = loginContext;

  const initialValues = {
    email: "",
    password: "",
  };

  if (redirect) {
    return <Navigate to={redirect} />;
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
          validationSchema={loginValidationSchema}
          onSubmit={handleLogin}
        >
          <Form>
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
              <label htmlFor="password" className="block font-semibold mb-2">
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
                className={`w-full py-2 px-4 text-white font-semibold rounded-md transition-colors ${loading ? "bg-blue-600 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
                disabled={loading}
              >
                {loading && (
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent border-solid rounded-full animate-spin mr-2"></span>
                )}
                Login
              </button>
            </div>

            {message && (
              <div
                className={`mb-4 p-3 rounded-md ${message.includes("error") ? "bg-red-100 text-red-600 border border-red-300" : "bg-green-100 text-green-600 border border-green-300"}`}
              >
                {message}
              </div>
            )}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
