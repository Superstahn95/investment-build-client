import Testimony from "./Testimony";
import AliceCarousel from "react-alice-carousel";

const testimonies = [
  {
    name: "Stephen Kruse",
    position: "investor",
    statement:
      "Investing is neccessary! Working for a paycheck all your life is no good especially at retirement. This realization led me to seek out ways to increase my savings and that's when i found Mining Exchange. Payouts are amazingly fast and easy",
  },
  {
    name: "April May",
    position: "share holder",
    statement:
      "Investing is neccessary! Working for a paycheck all your life is no good especially at retirement. This realization led me to seek out ways to increase my savings and that's when i found Mining Exchange. Payouts are amazingly fast and easy",
  },
  {
    name: "George Roberts",
    position: "investor",
    statement:
      "Investing is neccessary! Working for a paycheck all your life is no good especially at retirement. This realization led me to seek out ways to increase my savings and that's when i found Mining Exchange. Payouts are amazingly fast and easy",
  },
];
function Testimonial() {
  const items = testimonies.map((testimony) => (
    <Testimony
      key={testimony.name}
      name={testimony.name}
      position={testimony.position}
      statement={testimony.statement}
    />
  ));
  return (
    <div className="min-h-[500px] bg-slate-100 font-montserrat">
      <div className="w-full md:w-[80%] flex flex-col items-center mx-auto">
        <h3 className="text-red-400  text-xs md:text-lg mt-10">Testimonial</h3>
        <h2 className="font-bold text-xl md:text-6xl">What our clients say</h2>
        <div className="w-[50px] md:w-[100px] h-[2px] bg-red-400 mt-4" />
        {/* little line */}
        <div className="w-[50px] md:w-[100px] h-[2px]  mt-4" />
        <div className=" w-full flex items-center justify-center md:w-[80%] 2xl:w-[60%]">
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            disableButtonsControls
            infinite
            animationDuration={1000}
            autoPlayInterval={3000}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
