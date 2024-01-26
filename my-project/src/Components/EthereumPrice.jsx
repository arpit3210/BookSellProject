import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EthereumPrice = () => {
  const [ethPrice, setEthPrice] = useState(null);

  useEffect(() => {
    const fetchEthPrice = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`
        );

        // Assuming the API response structure is { ethereum: { usd: price } }
        setEthPrice(response.data.ethereum.usd);
      } catch (error) {
        console.error('Error fetching Ethereum price:', error);
      }
    };

    // Fetch ETH price on component mount
    fetchEthPrice();

    // Optionally, you can set up an interval to fetch the price periodically
    // const intervalId = setInterval(fetchEthPrice, 60000); // Fetch every 1 minute

    // Cleanup interval on component unmount
    // return () => clearInterval(intervalId);
  }, []); // Empty dependency array means it runs once on component mount

  return (
    <div>
      {ethPrice !== null ? (
        <p>Current Ethereum Price: ${ethPrice}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EthereumPrice;
