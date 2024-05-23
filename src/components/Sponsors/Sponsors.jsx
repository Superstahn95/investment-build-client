const logos = [
  "https://universalcapitalfx.com/img/partners/client-10.png",
  "https://universalcapitalfx.com/img/partners/client-11.png",
  "https://universalcapitalfx.com/img/partners/client-12.png",
  "https://universalcapitalfx.com/img/partners/client-13.png",
];
function Sponsors() {
  return (
    <div className="bg-slate-100 min-h-[40vh] flex flex-col items-center justify-center font-montserrat mt-7">
      {/* <h1 className="text-slate-800 font-bold text-xl mt-5 md:text-4xl 2xl:text-6xl font-montserrat">
        We are backed by
      </h1> */}
      <div className="p-4 grid grid-cols-2 gap-8   w-full md:w-[80%] md:grid-cols-4 mx-auto">
        {logos.map((logo) => (
          <div className="flex items-center justify-center w-full" key={logo}>
            <img src={logo} alt="logo" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
