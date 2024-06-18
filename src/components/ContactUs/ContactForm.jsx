import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { LuLoader2 } from "react-icons/lu";
import AuthTextInput from "../CustomFormInputs/AuthTextInput";
import MyTextArea from "../CustomFormInputs/MyTextArea";
import toastifyConfig from "../../utils/toastify";
function ContactForm() {
  const [loading, setLoading] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    content: "",
  };
  const handleMessageSend = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${import.meta.env.GENERAL_API_ENDPOINT}message`
      );
      toast.success(data.message, toastifyConfig);
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message, toastifyConfig);
      }
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white w-full p-4 overflow-x-scroll font-montserrat">
      <h2 className="font-bold text-2xl my-4 text-slate-800">
        Let&apos;s talk about your business.
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          email: Yup.string().required("Required"),
          name: Yup.string().required("Required"),
          phoneNumber: Yup.string().required("Required"),
          content: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          handleMessageSend(values);
        }}
      >
        <Form>
          <AuthTextInput
            name="name"
            type="text"
            placeholder="Enter your name"
          />
          <div className=" flex items-center space-x-2">
            <AuthTextInput
              name="phoneNumber"
              type="text"
              placeholder="Enter your mobile number"
            />
            <AuthTextInput
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <MyTextArea name="content" placeholder="Enter Message" />
          <button
            disabled={loading}
            type="submit"
            className="bg-red-400 text-white px-2 py-3 rounded-r-md rounded-tl-md w-full cursor-pointer flex items-center justify-center"
          >
            {loading ? <LuLoader2 className="animate-spin" /> : "Submit"}
          </button>
        </Form>
      </Formik>

      {/* <form className="w-full">
        <div className="mb-3">
          <input
            type="text"
            placeholder="Your name"
            className="p-4 text-sm rounded-md outline-none border w-full border-slate-800"
          />
        </div>
        <div className="mb-3 flex items-center space-x-2">
          <input
            type="text"
            placeholder="Telephone"
            className="p-4 flex-1 text-sm rounded-md outline-none border w-full border-slate-800"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 flex-1 text-sm rounded-md outline-none border w-full border-slate-800"
          />
        </div>
        <div className="mb-3">
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Message"
            className="p-4 text-sm rounded-md outline-none border w-full border-slate-800"
          />
        </div>
        <div className="mb-3">
          <button className="bg-red-400 text-white font-bold rounded-md p-3 w-[150px]">
            Submit
          </button>
        </div>
      </form> */}
      <ToastContainer containerId={"message"} />
    </div>
  );
}

export default ContactForm;
