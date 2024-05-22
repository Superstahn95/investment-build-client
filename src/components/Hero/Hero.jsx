import "./Hero.css";
function Hero() {
  return (
    <section className="hero py-5 relative min-h-[100vh] flex justify-center items-center font-montserrat">
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/75 "></div>
      {/* removed container class from below */}
      <div className=" py-5 ">
        <div className="flex justify-between items-center py-5 ">
          <div className="text-details text-white z-50">
            <h1 className="font-bold text-3xl md:text-4xl 2xl:text-6xl leading-normal text-red-400 text-center">
              Invest with us and let us invest for you.
            </h1>
            <p className=" text-lg md:text-xl py-3 leading-relaxed text-center">
              You don&apos;t have to consider the risk of investing in capital
              market, we can manage your investments.
            </p>
            <div className="py-3  flex flex-col items-center">
              <button className="bg-red-400 font-bold py-3 px-4 rounded uppercase">
                Register
              </button>
              <p className="text-xl font-bold mt-4">
                Register now | Earn in a few days
              </p>
            </div>
          </div>
          {/* <div className="w-3/5 bg-red-400 p-4 h-96">
        <img src={heroImg} className="h-full object-cover min-w-full" />
      </div> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
