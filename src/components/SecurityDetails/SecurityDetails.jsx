import { data } from "./securityData";
function SecurityDetails() {
  return (
    <div className="font-montserrat">
      <div className="md:w-[80%] w-full mx-auto ">
        <div className="py-7 mb-4">
          <h1 className="font-bold text-xl md:text-4xl 2xl:text-6xl">
            Security
          </h1>
        </div>
        {data.map((measure, index) => (
          <div key={index} className="mb-7">
            <h3 className="font-bold text-xl mb-4 text-black/60">
              {measure.question}
            </h3>
            <p className="text-sm text-black/60">{measure.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecurityDetails;
