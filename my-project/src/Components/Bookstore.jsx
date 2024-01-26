import { useState, useEffect } from "react";
import Web3 from "web3";
import BookStoreContract from "../Contracts/BookStore.json";
import LoaderSpinner from "./LoaderSpinner";
import Navbar from "./Navbar";
import Footer from "./Footer";
import EthereumPrice from "./EthereumPrice";
import React from 'react';
import axios from 'axios';



const Bookstore = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [booksOrdered, setBooksOrdered] = useState(0);
  const [bookPrice, setBookPrice] = useState(0);
  const [contractBalance, setContractBalance] = useState(0);
  const [loading, setLoading] = useState(false);
  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const [transactionError, setTransactionError] = useState("");

  const RefresPage = () => {
    window.location.reload();
  };




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


  const truncatedAddress = account
    ? `${account.substring(0, 6)}.....${account.substring(account.length - 6)}`
    : 'Please connect wallet ';



  useEffect(() => {
    const initWeb3 = async () => {
      // Provider injection for web3.js v4+
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      try {
        // Request account access using enable() for legacy compatibility
        await window.ethereum.enable();

        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);

        const networkId = 5; // Specify Goerli network ID

        const networkData = BookStoreContract.networks[networkId];

        if (networkData) {
          const contractInstance = new web3Instance.eth.Contract(
            BookStoreContract.abi,
            networkData.address
          );
          setContract(contractInstance);

          const price = await contractInstance.methods.bookPrice().call();
          setBookPrice(Web3.utils.fromWei(price, "ether"));

          const booksOrderedCount = await contractInstance.methods
            .getBooksOrdered()
            .call({ from: accounts[0] });
          console.log(booksOrderedCount);
          setBooksOrdered(Number(booksOrderedCount));

          const balance = await contractInstance.methods
            .getContractBalance()
            .call();
          setContractBalance(Web3.utils.fromWei(balance, "ether"));
        } else {
          console.error("Smart contract not deployed to the detected network.");
        }
      } catch (error) {
        console.error("Error connecting to Ethereum:", error);
      }
    };

    initWeb3();
  }, [account]);

  const handlePurchase = async () => {
    try {
      setLoading(true);
      setTransactionSuccess(false);
      setTransactionError("");

      const bookPriceWei = await contract.methods.bookPrice().call();
      const BookPrice = Number(bookPriceWei);
      const totalPrice = BookPrice * quantity;

      await contract.methods
        .purchaseBook(quantity)
        .send({ from: account, value: totalPrice });

      const updatedBooksOrdered = await contract.methods
        .getBooksOrdered()
        .call({ from: account });
      setBooksOrdered(updatedBooksOrdered);

      const updatedBalance = await contract.methods.getContractBalance().call();
      setContractBalance(Web3.utils.fromWei(updatedBalance, "ether"));

      setTransactionSuccess(true);
    } catch (error) {
      setTransactionError("Transaction failed. Please try again.");
      console.error("Error purchasing book:", error);
    } finally {
      setLoading(false);
    }
  };



  const bookPriceInEth = bookPrice; // Replace with your actual book price in Ethereum
  // Replace with the actual Ethereum price in dollars
  
  const bookPriceInDollar = bookPriceInEth * ethPrice;
  
  console.log(`Book Price in Dollar: $${bookPriceInDollar}`);
  

  const scientificNotationNumber = bookPriceInDollar.toExponential(2);;


// Convert to a fixed number with two decimal places
const BookPriceWithFloat =   scientificNotationNumber.slice(0, scientificNotationNumber.indexOf("e"));

console.log(BookPriceWithFloat);






  return (
    <>
      <Navbar></Navbar>

      <div className="h-screen max-w-[100vw]  flex justify-center items-center ">
        <div className="container  text-4xl mx-auto p-4">
        <p> <EthereumPrice></EthereumPrice> </p>

          <h1 className="text-4xl font-bold mb-6 text-[#f7644c]">Bookstore</h1>

          <p className="text-gray-600 max-md:hidden  mb-2">
            <span className="font-bold"> Account: </span>

            {truncatedAddress || "Not connected"}
          </p>





          <p className="text-gray-600 mb-2">
            <span className="font-bold"> Books ordered: </span>

            <span className="text-green-500"> {booksOrdered}</span>
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-bold"> Book price:</span>

            <span className="max-md:text-2xl "> {bookPrice} ETH </span>
          </p>

          <p className="text-gray-600 mb-2">
            <span className="font-bold"> Book price:</span>

            <span className="max-md:text-2xl "> {BookPriceWithFloat} $ </span>
          </p>

          <p className="text-gray-600 hidden mb-2">
            Contract balance:
            {contractBalance} ETH
          </p>

          <div className="mt-4">
            <label
              htmlFor="quantity"
              className="text-gray-600 font-bold block mb-2"
            >
              Quantity:  Price of Books <span  className="text-green-300">{quantity * BookPriceWithFloat} $ </span>
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border rounded py-2 px-3 w-full"
            />
          </div>

          {loading && <LoaderSpinner />}

          {!loading && !transactionSuccess && (
            <button
              className="bg-[#f7644c] text-white text-xl py-4 font-bold rounded-full px-6 mt-4 hover:bg-orange-400 transition duration-300"
              onClick={handlePurchase}
            >
              Purchase Book
            </button>
          )}

          {transactionError && (
            // <div className="text-red-500 mt-4">{transactionError}</div>

            <>
              <div className="absolute top-0  h-screen w-screen flex justify-center items-center    ">
                <div className=" lg:min-h-[50vh] lg:min-w-[50vw] min-h-[90vh] min-w-[90vw]  flex justify-center items-center  bg-white border border-red-400   shadow-2xl ">
                  <div className="flex flex-col gap-12 justify-center items-center">
                    <div className="text-red-500 text-center text-4xl mt-4">
                      {" "}
                      {transactionError}{" "}
                    </div>

                    <button
                      className="bg-[#f7644c]  text-white text-xl py-4 font-bold rounded-full px-6 mt-4 hover:bg-orange-400 transition duration-300"
                      onClick={RefresPage}
                    >
                      {" "}
                      Try Again{" "}
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {transactionSuccess && (
            // <div className="text-green-500 mt-4">Transaction successful!</div>

            <>
              <div className="absolute top-0  h-screen w-screen flex justify-center items-center    ">
                <div className=" lg:min-h-[50vh] lg:min-w-[50vw] min-h-[90vh] min-w-[90vw]  flex justify-center items-center  bg-white border border-green-400   shadow-2xl ">
                  <div className="flex flex-col gap-12 justify-center items-center">
                    <div className="text-green-500 text-center text-4xl mt-4">
                      Transaction successful!
                    </div>

                    <button
                      className="bg-green-500  text-white text-xl py-4 font-bold rounded-full px-6 mt-4 hover:bg-green-400 transition duration-300"
                      onClick={RefresPage}
                    >
                      Okay
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Bookstore;
