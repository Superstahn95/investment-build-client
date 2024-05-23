import { useEffect, useRef, useState } from "react";
import axios from "axios";
// import FundCalculator from "../components/FundCalculator";
import heroImg from "/images/pexels-tima-miroshnichenko-7567529.jpg";
import aboutImg from "/images/pexels-anna-nekrashevich-6801872.jpg";
import whyImg from "/images/pexels-tima-miroshnichenko-7567522.jpg";
import purposeImg from "/images/pexels-pixabay-220210.jpg";
import forexImg from "/images/pexels-rodnae-productions-8370752.jpg";
// import agricImg from "../assets/pexels-reto-bÃ¼rkler-1443867.jpg";
import goldImg from "/images/pexels-michael-steinberg-342945.jpg";
import estateImg from "/images/pexels-frans-van-heerden-1438832.jpg";
// import ceoImg from "/images/pexels-andrea-piacquadio-3783444.jpg";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Onboarding from "../../components/Onboarding/Onboarding";
import GotYou from "../../components/Gotyou/GotYou";
import Statistics from "../../components/Statistics/Statistics";
import Testimonial from "../../components/Testimonial/Testimonial";
import CoinTable from "../../components/CoinTable/CoinTable";
import Sponsors from "../../components/Sponsors/Sponsors";

function Home() {
  return (
    <>
      <Hero />
      <section className="py-5">
        <Services />
        <GotYou />
        <Onboarding />
        <Statistics />
        <Testimonial />
        <CoinTable />
        <Sponsors />
        <div className="py-5  container w-11/12 mx-auto my-5">
          <h1 className="text-center text-5xl capitalize py-10 text-red-400">
            {" "}
            Our investment packages
          </h1>
          <div className="container mx-auto w-11/12 grid grid-cols-3 gap-6 py-6">
            <div className="card flex flex-col items-center border-solid border-2 border-white rounded p-4">
              <div>
                <img src={forexImg} alt="" className="min-w-full" />
              </div>
              <div>
                <h2 className="font-bold text-2xl py-3">Forex/Crypto Plan</h2>
              </div>
              <hr />
              <div className="py-4">
                <p className="text-lg">Min: $1000|Max: $10000000</p>{" "}
              </div>

              <div className="py-4">
                <p> ROI: 5% | Days: 7 days</p>
              </div>
              <div className="py-4">
                <p> Daily Rate: 0.71%</p>
              </div>
            </div>
            <div className="card flex flex-col items-center border-solid border-2 border-white rounded p-4">
              {/* <div>
                <img src={agricImg} alt="" className="min-w-full" />
              </div> */}
              <div>
                <h2 className="font-bold text-2xl py-3">Agricultural Plan</h2>
              </div>
              <hr />
              <div className="py-4">
                <p className="text-lg">Min: $1000|Max: $10000000</p>{" "}
              </div>

              <div className="py-4">
                <p> ROI: 5% | Days: 7 days</p>
              </div>
              <div className="py-4">
                <p> Daily Rate: 0.71%</p>
              </div>
            </div>
            <div className="card flex flex-col items-center border-solid border-2 border-white rounded p-4">
              <div>
                <img src={goldImg} alt="" className="min-w-full" />
              </div>
              <div>
                <h2 className="font-bold text-2xl py-3">Gold Plan</h2>
              </div>
              <hr />
              <div className="py-4">
                <p className="text-lg">Min: $1000|Max: $10000000</p>{" "}
              </div>

              <div className="py-4">
                <p> ROI: 5% | Days: 7 days</p>
              </div>
              <div className="py-4">
                <p> Daily Rate: 0.71%</p>
              </div>
            </div>
            <div className="card flex flex-col items-center border-solid border-2 border-white rounded p-4 col-start-2">
              <div>
                <img src={estateImg} alt="" className="min-w-full" />
              </div>
              <div>
                <h2 className="font-bold text-2xl py-3">Real Estate Plan</h2>
              </div>
              <hr />
              <div className="py-4">
                <p className="text-lg">Min: $1000|Max: $10000000</p>{" "}
              </div>

              <div className="py-4">
                <p> ROI: 5% | Days: 7 days</p>
              </div>
              <div className="py-4">
                <p> Daily Rate: 0.71%</p>
              </div>
            </div>
          </div>
        </div>
        {/* Carry out slide in and fade in animations */}
        <div className="py-10 flex justify-between   items-center container w-11/12 mx-auto my-5">
          <div className="w-5/12">
            <p className="text-3xl py-3">
              We're building a financial company with people as our fundamental
              goal. We call it the wealth partnership.
            </p>

            <p className="text-xl py-3 leading-normal">
              We understand that our clients are humans with dreams, and that we
              are partners of their dreams. Our goal therefore, is to build the
              company that is committed to helping investors set and achieve
              financial goals within the shortest time possible.
            </p>
            {/* <button className="text-white uppercase font-bold bg-red-400 py-3 px-4 rounded">
              <Link>Get Started</Link>
            </button> */}
            <p className="text-lg text-red-400">
              <strong>George Roberts</strong>
            </p>
            <p className="capitalize text-red-400">Founder/CEO</p>
          </div>
          <div className="w-6/12 ">
            <img src={estateImg} alt="" className="min-w-full" />
          </div>
        </div>
        {/* <FundCalculator /> */}
      </section>
    </>
  );
}

export default Home;
