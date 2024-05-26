import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import AuthTextInput from "../../components/CustomFormInputs/AuthTextInput";
import registerImg from "/images/thumbs-up.png";
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate, Navigate } from "react-router-dom";
// import { reset, register } from "../features/auth/authSlice";
// import { Bars } from "react-loader-spinner";

function Register() {
  //   const { user, isSuccess, isLoading, isError, message, isAuthenticated } =
  //     useSelector((state) => state.auth);
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();
  const isLoading = false;
  //   useEffect(() => {
  //     if (isError) {
  //       //i'll be handling this in a better way
  //       alert(message);
  //     }
  //     if (isSuccess || user) {
  //       navigate("/dashboard", { replace: true });
  //     }
  //     dispatch(reset());
  //   }, [isError, isSuccess, message, user, dispatch, navigate]);

  //i feel we need to dispatch the reset functionality whenever state changes
  const initialData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  //   if (isAuthenticated) {
  //     return <Navigate to={"/dashboard"} />;
  //   }
  return (
    <main className="min-h-screen w-full  grid md:grid-cols-2">
      <div className="hidden md:flex items-center  justify-center bg-slate-900">
        <img src={registerImg} alt="register image" />
      </div>
      <div className="flex items-center h-full justify-center ">
        <div className=" w-full sm:w-[80%]  py-4 px-3 rounded-md shadow-xl">
          <h2 className="font-montserrat text-gray-700 text-3xl font-bold py-3 text-center">
            Sign Up
          </h2>
          <p className="text-gray-700 font-montserrat text-sm text-center ">
            <span className="font-bold text-red-400">
              {" "}
              Start earning now!!!{" "}
            </span>
            Register with us
          </p>
          <Formik
            initialValues={initialData}
            validationSchema={Yup.object({
              name: Yup.string()
                .min(3, "Must be greaternthan 3 characters")
                .required("Required"),
              email: Yup.string().required("Required"),
              password: Yup.string()
                .min(6, "Password must be greater than 6 characters")
                .required("Required"),
              confirmPassword: Yup.string()
                .min(6, "Must be greater than 6 characters")
                .required(),
            })}
            onSubmit={(values) => {
              //   dispatch(register(values));
              console.log(values);
            }}
          >
            <Form>
              <AuthTextInput
                label="Name"
                name="name"
                type="text"
                placeholder="Enter your name"
              />
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
              <AuthTextInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
              />
              <p className="text-xs text-gray-700 font-montserrat">
                Already have an account?{" "}
                <Link to={"/login"} className="text-red-400">
                  Sign in
                </Link>
              </p>
              <div className="my-2">
                <button
                  type="submit"
                  className={`${
                    isLoading ? "bg-gray-500" : "bg-red-400"
                  }  text-white px-2 py-3 rounded-r-md rounded-tl-md w-full cursor-pointer`}
                  disabled={isLoading}
                >
                  Sign Up
                </button>

                {isLoading ? (
                  <div className="flex items-center justify-center">
                    {/* <Bars
                      height="30"
                      width="100"
                      color="#9e9e9e"
                      ariaLabel="bars-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    /> */}
                    loading...
                  </div>
                ) : null}
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </main>
  );
}

export default Register;
