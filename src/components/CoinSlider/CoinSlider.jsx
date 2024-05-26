import { useState, useEffect } from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import CoinContainer from "./CoinContainer";
function CoinSlider() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const responsive = {
    0: {
      items: 3,
    },
    900: {
      items: 4,
    },
  };
  const getCoins = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_COIN_GECKO_BASE_URL
        }coins/markets?vs_currency=usd&x_cg_demo_api_key=${
          import.meta.env.VITE_COIN_GECKO_API_KEY
        }`
      );
      console.log(data);
      setCoins(data.slice(0, 10));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setIsError(true);
    }
  };
  const items = coins.map((coin) => (
    <CoinContainer
      key={coin.id}
      price={coin.current_price}
      priceChange={coin.price_change_24h}
      priceChangePercentage={coin.price_change_percentage_24h}
      symbol={coin.symbol}
    />
  ));

  useEffect(() => {
    getCoins();
  }, []);
  if (isError || loading) return null;
  return (
    <div className="fixed z-[99] bottom-0 left-0 right-0 bg-slate-900 h-[70px] flex items-center justify-center">
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        disableButtonsControls
        disableDotsControls
        infinite
        animationDuration={1000}
        autoPlayInterval={2000}
        responsive={responsive}
      />
    </div>
  );
}

export default CoinSlider;
