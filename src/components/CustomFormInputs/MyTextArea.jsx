/* eslint-disable react/prop-types */
import { useField } from "formik";

function MyTextArea({ label, directive, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col space-y-2 mb-4 text-gray-600 font-montserrat">
      <label htmlFor={props.id || props.name} className="text-gray-700 ">
        {label}
      </label>
      <textarea
        className="border border-gray-500 outline-none w-full "
        rows="5"
        {...field}
        {...props}
      >
        <p className="text-sm ">{directive}</p>
        {meta.touched && meta.error ? (
          <div className="text-red-500  text-xs">{meta.error}</div>
        ) : null}
      </textarea>
    </div>
  );
}

export default MyTextArea;
