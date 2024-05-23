/* eslint-disable react/prop-types */
function Step({ step }) {
  return (
    <div className="rounded-md shadow-md p-5 font-montserrat ">
      {step.icon}
      <h2 className="text-xl md:text-4xl font-bold text-slate-700 my-4">
        {step.process}
      </h2>
      <p>{step.details}</p>
    </div>
  );
}

export default Step;
