import "./Home.css";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Onboarding from "../../components/Onboarding/Onboarding";
import GotYou from "../../components/Gotyou/GotYou";
import Statistics from "../../components/Statistics/Statistics";
import Testimonial from "../../components/Testimonial/Testimonial";
import CoinTable from "../../components/CoinTable/CoinTable";
import Sponsors from "../../components/Sponsors/Sponsors";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import CoinSlider from "../../components/CoinSlider/CoinSlider";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <section className="py-5"> */}
      <Services />
      <GotYou />
      <Onboarding />
      <Statistics />
      <Testimonial />
      <CoinTable />
      <Sponsors />
      <CoinSlider />
      <Footer />
      {/* </section> */}
    </>
  );
}

export default Home;
