/* eslint-disable react/prop-types */

function Refetch({ handleRetry, text }) {
  return (
    <div className="w-full font-montserrat flex flex-col items-center justify-center">
      <p className="text-xl font-bold my-4 dark:text-white">
        Something went wrong 😰
      </p>
      <p className="text-sm dark:text-white mb-4">{text}</p>
      <button
        className="p-4 rounded-md bg-red-500 text-white cursor-pointer"
        onClick={handleRetry}
      >
        Click to retry
      </button>
    </div>
  );
}

export default Refetch;
