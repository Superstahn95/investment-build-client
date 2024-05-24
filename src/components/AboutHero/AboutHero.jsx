import "./styles.css";
function AboutHero() {
  return (
    <section className="about-section py-5 relative mt-14 flex justify-center min-h-[40vh] items-center font-montserrat">
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/50 "></div>
      <p className="text-white font-bold text-4xl relative z-[19] uppercase">
        About
      </p>
    </section>
  );
}

export default AboutHero;
