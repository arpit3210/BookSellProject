import React from "react";
import { Puzzle } from "../assets/Images";

const Footer = () => {
  return (
    <div className="md:h-[50vh] overflow-hidden h-[70vh]  text-white bg-[#f7644c] ">
      <div className=" flex flex-wrap justify-between items-start ">
        <div className="py-10 px-10">
          <span className=" md:text-5xl text-4xl font-semibold  ">
            The Everything <br /> Token
          </span>
        </div>

        <div className="md:py-10 md:px-10 md:pr-20   py-5 px-5 pr-10  ">
          <div className=" cursor-pointer  text-4xl ">Buy It Now</div>

          <div className="flex justify-between gap-16 my-5 items-end">
            <div className="flex flex-col gap-5">
              <span className="underline cursor-pointer   text-3xl font-extralight">Home</span>

              <span className="underline  cursor-pointer  text-3xl font-extralight">
                Contact
              </span>

              <span className="underline cursor-pointer   text-3xl font-extralight">
                Authors
              </span>
            </div>

            <div className="flex flex-col gap-5">
              <span className="underline cursor-pointer   text-3xl font-extralight">
                Amazon
              </span>

              <span className="underline cursor-pointer   text-3xl font-extralight">
                Imprint
              </span>

              <span className="underline cursor-pointer   text-3xl font-extralight">
                Terms{" "}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex py-5 px-5 justify-between">
        <div></div>
        <img src={Puzzle} alt="" />
      </div>
    </div>
  );
};

export default Footer;
