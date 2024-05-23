function Sponsors() {
  return (
    <div className="bg-slate-100 min-h-[40vh] flex flex-col items-center justify-center font-montserrat mt-7">
      {/* <h1 className="text-slate-800 font-bold text-xl mt-5 md:text-4xl 2xl:text-6xl font-montserrat">
        We are backed by
      </h1> */}
      <div className="p-4 grid grid-cols-2 gap-8  w-full md:w-[80%] md:grid-cols-5 mx-auto">
        <img
          src="https://universalcapitalfx.com/img/partners/client-10.png"
          alt=""
        />
        <img
          src="https://universalcapitalfx.com/img/partners/client-11.png"
          alt=""
        />
        <img
          src="https://universalcapitalfx.com/img/partners/client-12.png"
          alt=""
        />
        <img
          src="https://universalcapitalfx.com/img/partners/client-13.png"
          alt=""
        />
        {/* <img
          src="https://universalcapitalfx.com/img/partners/client-01.png"
          alt=""
        /> */}
      </div>
    </div>
  );
}

export default Sponsors;
