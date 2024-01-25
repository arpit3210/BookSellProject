import React from "react";
import { FaLinkedinIn, FaLink } from "react-icons/fa";
import PropTypes from "prop-types";
import { FaXTwitter } from "react-icons/fa6";

const AuthorProfile = ({
  name,
  description,
  imageSrc,
  twitterLink,
  linkedinLink,
  personalLink,
}) => {
  return (
    <div className="max-lg:p-4">
      <div className="bg-teal-50 lg:max-w-[30vw]  flex flex-col   lg:min-h-[135vh] p-10 ">
        <div className="flex justify-center items-start  ">
          <img
            className="h-[58vh] w-[40vh] object-cover"
            src={imageSrc}
            alt={name}
          />
        </div>

        <div className="lg:px-9 px-7 ">
          <h1 className="text-[#f7644c] text-3xl lg:text-center font-semibold lg:mt-14 mt-7 mb-5 ">
            {name}
          </h1>

          <br />
          <span className="lg:leading-9 leading-7 text-gray-600 lg:text-xl text-lg ">
            {description}
          </span>

          <div className="flex gap-5 max-lg:gap-10 text-4xl py-8">
            <a href={twitterLink} target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>

            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>

            <a href={personalLink} target="_blank" rel="noopener noreferrer">
              <FaLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

AuthorProfile.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  twitterLink: PropTypes.string.isRequired,
  linkedinLink: PropTypes.string.isRequired,
  personalLink: PropTypes.string.isRequired,
};

const Authors = () => {
  return (
    <div>
      <div className="text-center font-semibold text-5xl py-16 font-sans text-[#f7644c]">
        <h1 className="leading-14">
          Meet the
          <br />
          Authors
        </h1>
      </div>

      <div className="flex gap-40 justify-center p-.5 items-start max-lg:flex-wrap ">
        <AuthorProfile
          name="Steve Kaczynski"
          description="Steve Kaczynski has more than fifteen years of experience as a communications and marketing professional, including stints in leadership at Progressive Insurance and Nestlé. Now a tech entrepreneur, consultant, and commentator, he cohosts the popular Web3 morning show Coffee with Captain, and serves as the Community Lead for Starbucks Odyssey, the coffee company's NFT-based loyalty program."
          imageSrc="https://images.squarespace-cdn.com/content/v1/65144eeb1cd20b220187096c/6fd50a24-7e5f-4700-bb54-f526624cc3f6/SK_Headshot_2023_SQ.jpg?format=1500w"
          twitterLink="https://twitter.com/NFTbark"
          linkedinLink="https://www.linkedin.com/in/skaczynski/"
          personalLink="https://www.stevekaczynski.com/"
        />

        <AuthorProfile
          name={
            <>
              Scott Duke
              <br />
              Kominers
            </>
          }
          description="Scott Duke Kominers is the Sarofim-Rock Professor of Business Administration at Harvard Business School; a Faculty Affiliate of the Harvard Department of Economics; and an a16z crypto Research Partner. He co-leads Harvard's Crypto, Fintech, and Web3 Lab. He also advises companies and serves as an expert on marketplace design, NFTs, and Web3 strategy."
          imageSrc="https://images.squarespace-cdn.com/content/v1/65144eeb1cd20b220187096c/ab15981e-095c-4894-a9e8-b48af3169143/Scott_Duke_Kominers_headshot.jpg?format=1500w"
          twitterLink="https://twitter.com/skominers"
          linkedinLink="https://www.linkedin.com/in/scott-kominers/"
          personalLink="http://scottkom.com/"
        />
      </div>
    </div>
  );
};

export default Authors;
