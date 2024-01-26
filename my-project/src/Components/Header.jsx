import React from "react";
import { HeaderImage } from "../assets/Images/index";
import { useBookstore } from '../Contexts/BookstoreContext';
import { Link } from "react-router-dom";

const Header = () => {

  const { account, booksOrdered, setBooksOrdered, initWeb3 } = useBookstore();

  console.log("Account Address from Header", account );

  return (
    <div>
      <div className="flex flex-wrap  ">
        <div className=" sm:w-full  lg:w-1/2  lg:h-[140vh]  xl:w-1/2">
          <img className=" object-cover w-full h-full " src={HeaderImage} alt="The Everything Token" />
        </div>

        <div className=" sm:w-full  lg:w-1/2 lg:h-[140vh] xl:w-1/2">
          <h1 className=" md:mt-56 mt-20 font-bold  text-[#f7644c] md:text-3xl text-center md:px-24 px-3 text-xl ">
            Demystifying Web3, NFTs, and the Blockchain for Everyday Businesses
            and Consumers
          </h1>

          <p className="py flex flex-col gap-7 text-gray-500 text-lg px-5  md:px-32 leading-7 my-4 ">
            <div>
              NFTs aren’t just pictures on the internet, or a fad that has come
              and gone. Rather, they’re a new technology for creating digital
              assets and providing irrefutable proof of ownership. NFTs open up
              markets that have never before existed, and are already
              revolutionizing commerce and brand-building at everything from hot
              startups to Fortune 500 companies.
            </div>

            <div>
              {" "}
              Steve Kaczynski and Scott Duke Kominers have created a framework
              that explains what NFTs are, why they’re valuable, and how
              businesses can leverage them to build highly engaged and intensely
              loyal communities around their products and brands.
            </div>

            <div>
              Through original research and industry experience, Kominers and
              Kaczynski describe the possibilities of this new digital frontier
              with clarity and rigor. The Everything Token is the essential
              primer on this innovation that has the potential to transform all
              aspects of business.
            </div>
          </p>

          <div className="flex text-center flex-col justify-center items-center  gap-4">
            <div className="text-4xl  my-4 font-semibold text-thin text-[#f7644c] ">
              Buy It Now
            </div>

            {/* Barnes & Noble
Harvard Book Store
Europe */}


{!account && 
  <div className="bg-[#f7644c] w-36 cursor-pointer hover:bg-orange-500  font-semibold text-gray-100 py-3 rounded-full px-5" onClick={initWeb3} >
              {" "}
             Metamask Login
            </div>
}



            <div className="bg-[#f7644c] w-36 cursor-pointer hover:bg-orange-500  font-semibold text-gray-100 py-3 rounded-full px-5">
              {" "}
              Amazon
            </div>


            <Link to="/Bookstore" >
          <div className="bg-[#f7644c] mb-28 w-36 cursor-pointer hover:bg-orange-500  font-semibold text-gray-100 py-3 rounded-full px-5">
              {" "}
              Buy Now
            </div>
          </Link>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
