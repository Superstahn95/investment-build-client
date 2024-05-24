/* eslint-disable react/prop-types */

function CoinContainer({ symbol, price, priceChange, priceChangePercentage }) {
  return (
    <div className="flex items-center space-x-2 justify-center font-montserrat text-white border-r border-r-white/80 flex-wrap p-4">
      <span className="uppercase font-bbold">{symbol}/USD</span>
      <span>{Math.round((price + Number.EPSILON) * 100) / 100}</span>
      <span
        className={`${priceChange < 0 ? "text-red-700" : "text-green-700"}`}
      >
        {Math.round((priceChange + Number.EPSILON) * 100) / 100}(
        {priceChangePercentage}%)
      </span>
    </div>
  );
}

export default CoinContainer;

// price_change_percentage_24h
