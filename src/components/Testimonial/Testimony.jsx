/* eslint-disable react/prop-types */
function Testimony({ name, position, statement }) {
  return (
    <div className="mt-7  flex flex-col items-center font-montserrat p-4 ">
      <div className="text-red-400 font-bold text-7xl">&quot;</div>
      <p className="text-center text-sm md:text-xl">{statement}</p>
      <p className="mt-10 font-bold text-xl md:text-3xl">{name}</p>
      <span className="uppercase text-sm md:text-xl">{position}</span>
    </div>
  );
}
// md:w-[80%] 2xl:w-[60%]

export default Testimony;
