import { useState, useEffect } from "react";
import axios from "axios";
function CoinTable() {
  // 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'
  const [coins, setCoins] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
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
      setCoins(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => {
    getCoins();
  }, []);
  if (isError) {
    return <div>Cannot get coin data at this time</div>;
  }
  return (
    <div className="font-montserrat min-h-[20vh] flex items-center justify-center ">
      <div className="w-full md:w-[80%] p-4 mx-auto  max-h-[80vh] overflow-scroll">
        {loading ? (
          <p>Fetching coin data....</p>
        ) : (
          <table className="w-full text-white/80 bg-slate-800 ">
            <tr>
              <th className="text-start p-3">Name</th>
              <th className="text-start">MKT Cap</th>
              <th className="text-start">Price</th>
              <th className="text-start">MKT Cap rank</th>
              <th className="text-start">ATH</th>
              <th className="text-start">ATL</th>
              <th className="text-start">CHG%</th>
            </tr>
            {coins?.map((coin) => (
              <tr key={coin.id}>
                <td className="p-3">
                  <div className="flex items-center space-x-5">
                    <img
                      src={coin.image}
                      alt=""
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <span className="capitalize text-blue-700 font-bold">
                      {coin.id}
                    </span>
                  </div>
                </td>
                <td>{coin.market_cap}</td>
                <td>{coin.current_price}</td>
                <td>{coin.market_cap_rank}</td>
                <td>{coin.ath}</td>
                <td>{coin.atl}</td>
                <td
                  className={`${
                    coin.price_change_percentage_24h > 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {coin.price_change_percentage_24h}
                </td>
              </tr>
            ))}
          </table>
        )}
      </div>
    </div>
  );
}

export default CoinTable;
