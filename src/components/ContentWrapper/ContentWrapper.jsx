/* eslint-disable react/prop-types */

function ContentWrapper({ icon, text, number, iconBgColor, isMoney }) {
  return (
    <div className="rounded bg-white flex flex-col items-center justify-center md:block  h-40 shadow-sm space-y-2 p-4 dark:bg-slate-800 font-montserrat">
      <div className={`${iconBgColor} rounded-full p-2 w-fit`}>{icon}</div>
      <div>
        <p className="text-gray-400 dark:text-white text-sm">{text}</p>

        <p className="text-3xl text-gray-700 font-bold dark:text-white">
          {isMoney ? `$${number}` : `${number}`}
        </p>
      </div>
    </div>
  );
}

export default ContentWrapper;
