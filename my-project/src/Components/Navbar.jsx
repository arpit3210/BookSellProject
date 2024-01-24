import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [OpenNav, setOpenNav] = useState(false);

  const HandleOpenNav = () => {
    if (OpenNav) {
      setOpenNav(false);
    } else {
      setOpenNav(true);
    }
  };

  return (


    <>



<nav className="bg-gray-100 max-lg:hidden  h-20 py-4 px-10 pl-14 shadow-2xl   ">
      <div className="flex flex-row justify-between items-center">
        <div className="text-3xl cursor-pointer font-extrabold font-mono ">
          <h1>The Everything Token</h1>
        </div>

        <div className="flex flex-row gap-7 items-center  pr-5">
          <div className="text-gray-600 text-lg  cursor-pointer hover:text-gray-400  "> Authors </div>

          <div className="text-gray-600 text-lg  cursor-pointer  hover:text-gray-400 "> Contact</div>

          <div className="bg-[#f7644c]  cursor-pointer hover:bg-orange-500  font-semibold text-gray-100 py-3 rounded-full px-5"> Buy Now</div>
        </div>
      </div>
    </nav>





      {!OpenNav ? (
        <nav className="max-h-[10vh] lg:hidden  bg-white shadow-md py-5 pl-5 flex justify-between items-center   ">
          <div className="text-base font-extrabold font-mono ">
            <h1>The Everything Token</h1>
          </div>

          <div className="py-1 px-6" onClick={HandleOpenNav}>
            <RxHamburgerMenu fontSize={40} />
          </div>
        </nav>
      ) : (
        <nav className="bg-emerald-950 fixed top-0 ">
      <div className="   ">

      <div className="max-h-[10vh] w-[100vw]   text-orange-500  py-5 pl-5  flex justify-between items-center   ">
            <div className="text-base font-extrabold font-mono ">
              <h1>The Everything Token</h1>
            </div>

            <div className="py-1 px-6" onClick={HandleOpenNav}>
              <IoCloseSharp fontSize={40} />
            </div>
          </div>

          <div className="h-[90vh] text-orange-500 font-thin text-4xl leading-10 w-[100vw] flex flex-col justify-between ">
            
            <div></div>
            
            <div className="px-10">
              
              <div className="hover:text-gray-200"> Authors </div>
              <br />
              <div className="hover:text-gray-200"> Contact</div>
            </div>

            <div className="py-10 px-10">
              <div className="bg-[#f7644c] h-16 hover:ring-1 ring-white w-48 text-center text-2xl  font-semibold text-gray-100  rounded-full px-8 py-3">
                <span>Buy Now</span>
              </div>
            </div>
          </div>


      </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
