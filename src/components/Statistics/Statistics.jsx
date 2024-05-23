import { useState } from "react";
import bgImg from "/images/pexels-anna-tarazevich-14751274.jpg";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { CiUser, CiTrophy } from "react-icons/ci";
import { GoSmiley } from "react-icons/go";
import { FaRegHandshake } from "react-icons/fa";

function Statistics() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <section
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="relative min-h-[500px] flex items-center justify-center font-montserrat"
    >
      <div className="absolute bg-black/70 top-0 left-0 w-full h-full"></div>
      <div className="container w-[90%] mx-auto py-10 relative z-1 grid grid-cols-1  text-white font-roboto md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center ">
          <CiUser size={50} />
          <div className="py-4 flex">
            <ScrollTrigger onEnter={() => setCounterOn(true)}>
              {counterOn && (
                <h1 className="text-5xl font-bold ">
                  <CountUp duration={2} delay={0} start={0} end={9800} />+
                </h1>
              )}
            </ScrollTrigger>
            <span className="text-3xl font-bold">%</span>
          </div>

          <hr className="w-[10%] " />
          <p className="py-4">Satisfied Investors</p>
        </div>
        <div className="flex flex-col items-center">
          <GoSmiley size={50} />
          <div className="py-4 flex">
            {counterOn && (
              <h1 className="text-5xl font-bold">
                <CountUp duration={2} delay={0} start={0} end={3000} />+
              </h1>
            )}
          </div>
          <hr className="w-[10%] " />
          <p className="py-4 capitalize">consultations</p>
        </div>
        <div className="flex flex-col items-center">
          <CiTrophy size={50} />
          {counterOn && (
            <h1 className="text-5xl font-bold  py-4">
              <CountUp duration={2} delay={0} start={0} end={7} />+
            </h1>
          )}
          <hr className="w-[10%]" />
          <p className="py-4 capitalize">Trophies won</p>
        </div>
        <div className="flex flex-col items-center">
          <FaRegHandshake size={50} />
          {counterOn && (
            <h1 className="text-5xl font-bold  py-4">
              <CountUp start={0} duration={2} delay={0} end={700} />+
            </h1>
          )}

          <hr className="w-[10%]" />
          <p className="py-4 capitalize">partnerships</p>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
