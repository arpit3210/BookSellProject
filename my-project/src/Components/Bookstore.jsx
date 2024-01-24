import { useState, useEffect } from 'react';
import Web3 from 'web3';
import BookStoreContract from '../Contracts/BookStore.json'; // Replace with the correct path

const Bookstore = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [booksOrdered, setBooksOrdered] = useState(0);
  const [bookPrice, setBookPrice] = useState(0);
  const [contractBalance, setContractBalance] = useState(0);

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
          setBookPrice(Web3.utils.fromWei(price, 'ether'));

          const booksOrderedCount = await contractInstance.methods.getBooksOrdered().call({ from: accounts[0] });
       console.log(booksOrderedCount);
          setBooksOrdered(Number(booksOrderedCount));

          const balance = await contractInstance.methods.getContractBalance().call();
          setContractBalance(Web3.utils.fromWei(balance, 'ether'));
        } else {
          console.error('Smart contract not deployed to the detected network.');
        }
      } catch (error) {
        console.error('Error connecting to Ethereum:', error);
      }
    };

    initWeb3();
  }, [account]);

  const handlePurchase = async () => {
    const bookPriceWei = await contract.methods.bookPrice().call();
    console.log(quantity);
    console.log(bookPriceWei);
    const BookPrice = Number(bookPriceWei);
    console.log(BookPrice);
    const totalPrice = BookPrice * quantity;

    try {

      console.log("Before Purchase Books Function");
      await contract.methods.purchaseBook(quantity).send({ from: account, value: totalPrice });
      console.log("After Purchase Books Function");
      const updatedBooksOrdered = await contract.methods.getBooksOrdered().call({ from: account });
      console.log("After Get Books Ordered Function");
      setBooksOrdered(updatedBooksOrdered);
      console.log("After setBooksOrdered(updatedBooksOrdered) Function");
      const updatedBalance = await contract.methods.getContractBalance().call();
     
      console.log("After getContractBalance Function");
      setContractBalance( Web3.utils.fromWei(updatedBalance, 'ether'));
      console.log(" setContractBalance");
    } catch (error) {
      console.error('Error purchasing book:', error);
    }
  };





  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Bookstore</h1>
      <p className="text-gray-600">Account: {account}</p>
      <p className="text-gray-600">Books ordered: {booksOrdered}</p>
      <p className="text-gray-600">Book price: {bookPrice} ETH</p>
      <p className="text-gray-600">Contract balance: {contractBalance} ETH</p>
      <div className="mt-4">
        <label htmlFor="quantity" className="text-gray-600">Quantity:</label>
        <input
          type="number"
          id="quantity"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="border rounded py-1 px-2"
        />
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 mt-4" onClick={handlePurchase}>
        Purchase Book
      </button>
    </div>
  );
};

export default Bookstore;



// import React from 'react'

// const Bookstore = () => {
//   return (
//     <div>Bookstore</div>
//   )
// }

// export default Bookstore