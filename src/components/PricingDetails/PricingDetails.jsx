const pricingInfo = [
  { category: "Category", status: "Portfolio" },
  { category: "Status", status: "Open" },
  { category: "Cycles", status: "Flexible/Fixed" },
  { category: "ROI", status: "Variable" },
  { category: "Availability", status: "Registered Accounts" },
];

function PricingDetails() {
  return (
    <div className="font-montserrat py-7">
      <div className="grid md:grid-cols-2 gap-8 mx-auto p-4 w-full md:w-[80%]">
        {/* text div */}
        <div>
          <h2 className="font-bold text-slate-900 text-lg  md:text-xl 2xl:text-4xl mb-2">
            Our pricing strategy
          </h2>
          <div className="w-[50px] md:w-[100px] h-[2px] bg-red-400  mb-4" />
          <p className="mb-5 text-sm 2xl:text-lg">
            Our Plans and Pricing are built around various assets selection and
            inclusion. Each Plan is a portfolio. The assets contained are
            selected with the budget in consideration. We have applied very
            strong technical and fundamental analysis in selecting the assets in
            the portfolios and balancing them against moderate risk exposures.
            The Pricing matches the ideal expected return on an investment
            withing the stipulated budget
          </p>
          <p className="mb-5 text-sm 2xl:text-lg">
            Our Plans and Pricing are very adjustable and flexible. We have
            deployed a lot of parameters in determining the best ways to create
            portfolios for every class and category of indivuals and
            institutions, such that every investor in our clientele feels very
            comfortable with the investment plans they choosse. And even when
            the plans don&apos;t exactly fit, we have advisors ready to fill you
            in and guide your decision.
          </p>
        </div>
        {/* image div */}
        <div>
          <h2 className="font-bold text-slate-900 text-lg  md:text-xl 2xl:text-4xl mb-2">
            Pricing Information
          </h2>
          <div className="w-[50px] md:w-[100px] h-[2px] bg-red-400  mb-4" />
          <div className="border border-black/40 px-2 max-w-[400px]">
            {pricingInfo.map((info) => (
              <div
                key={info.category}
                className="flex items-center p-3 border-b border-black/40"
              >
                <span className="flex-1">{info.category}:</span>
                <span className="flex-1">{info.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingDetails;
