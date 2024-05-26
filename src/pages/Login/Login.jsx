/* eslint-disable no-unused-vars */
import { Formik, Form } from "formik";
import * as Yup from "yup";
import AuthTextInput from "../../components/CustomFormInputs/AuthTextInput";
import ladyImg from "/images/lady-sitting.png";
import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { login, reset } from "../features/auth/authSlice";
import { useEffect } from "react";

function Login() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  //   const { isSuccess, isLoading, isError, user, message } = useSelector(
  //     (state) => state.auth
  //   );
  //   useEffect(() => {
  //     if (isError) {
  //       alert(message); //handle error properly
  //     }
  //     if (isSuccess || user) {
  //       navigate("/dashboard");
  //     }
  //     dispatch(reset());
  //   }, [isError, isSuccess, user, message, dispatch, navigate]);
  const initialData = {
    email: "",
    password: "",
  };
  return (
    <main className="min-h-screen w-full  grid md:grid-cols-2">
      <div className="items-center hidden md:flex justify-center bg-slate-900">
        <img src={ladyImg} alt="login image" />
      </div>
      <div className="flex  items-center h-full justify-center">
        <div className="w-full  sm:w-[80%]  px-3 py-4 rounded-md shadow-xl ">
          <h2 className="font-montserrat text-gray-700 text-3xl font-bold py-3 text-center">
            Sign In
          </h2>
          <p className="text-gray-700 font-montserrat text-sm text-center ">
            <span className="font-bold text-red-400"> Welcome back!!! </span>
            Sign in to continue earning
          </p>
          <Formik
            initialValues={initialData}
            validationSchema={Yup.object({
              email: Yup.string().required("Required"),
              password: Yup.string().required("Required"),
            })}
            onSubmit={(values) => {
              console.log(values);
              //   dispatch(login(values));
            }}
          >
            <Form>
              <AuthTextInput
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
              <AuthTextInput
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
              />

              <p className="text-xs text-gray-700 font-montserrat">
                Don&apos;t have an account?{" "}
                <Link to={"/register"} className="text-red-400">
                  Sign up
                </Link>
              </p>
              <div className="my-2">
                <button
                  type="submit"
                  className="bg-red-400 text-white px-2 py-3 rounded-r-md rounded-tl-md w-full cursor-pointer"
                >
                  Sign In
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </main>
  );
}

export default Login;
