import React, { useState } from "react";
import {
  CodeIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  IdentificationIcon,
} from "@heroicons/react/solid";
import { MailIcon, ClipboardListIcon } from "@heroicons/react/outline";



const fbb = require("../assets/fBB.png");
const LinkedinLogo = require("../assets/LinkedinLogo.png");
const GitLogo = require("../assets/GitLogo.png");
const MailLogo = require("../assets/MailLogo.png");
const Avatar = require("../assets/ose.png");

const LeftBar = (props) => {
  const [showWebList, SetShowWebList] = useState(true);
  const [showAboutList, SetShowAboutList] = useState(true);


  const WebList = () => (
    <div className=" ml-5">
       
      <a href="https://bit.ly/covid_tracker_app">
        <div className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]">
          <CodeIcon className="h-5 w-5 mr-1 text-yellow_vs" />
          <p className="invisible truncate hover:text-clip md:visible">Covid 19 Tracker</p>
        </div>
      </a>
      <a href="https://bit.ly/food_recipe">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ">
          <CodeIcon className="h-5 w-5 mr-1   text-yellow_vs" />
          <p className="invisible truncate md:visible hover:text-clip">Food Receipe App</p>
        </div>
      </a>
      <a href="https://easy-google.vercel.app">
        <div className=" flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ">
          <CodeIcon className="h-5 w-5 mr-1  text-yellow_vs" />
          <p className="invisible truncate hover:text-clip md:visible">Google clone</p>
        </div>
      </a>
    </div>
  );

  const AboutList = () => (
    <div className="ml-5" >
      <div
        className=" flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]"
        onClick={() => props.SetScroll("About")}
      >
        <IdentificationIcon className=" h-5 w-5 mr-1 text-yellow_vs" />
        <p className="invisible truncate hover:text-clip md:visible">About Me</p>
      </div>
      <div
        className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 "
        onClick={() => props.SetScroll("Resume")}
      >
        <ClipboardListIcon className=" h-5 w-5 mr-1 text-yellow_vs" />
        <p className="invisible truncate hover:text-clip md:visible">Resume</p>
      </div>
      <div
        className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] "
        onClick={() => props.SetScroll("Contact")}
      >
        <MailIcon className="h-5 w-5 mr-1  text-yellow_vs" />
        
        <p className="invisible truncate hover:text-clip md:visible">Contact</p>

      </div>
    </div>
  );

  return (
    <div className="w-14 text-[#a2aabc] text-lg mt-5 flex flex-col justify-center">
     <img src={Avatar} className="block px-2 sm:ml-3 pt-5 rounded-full md:hidden" width="120" height="120"/>    
     <div>
        <div className="hidden  place-items-center w-14 bg-[#262526] sm:w-20 md:block md:w-40 lg:w-72 "> 
       
          <div
          className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-full"
          onClick={() => SetShowAboutList(!showAboutList)}
        >
          {showAboutList ? (
            <ChevronDownIcon className=" h-5 w-5 mr-1  text-yellow_vs" />
          ) : (
            <ChevronRightIcon className=" h-5 w-5 mr-1  text-yellow_vs" />
          )}
            
          <p className="">About</p>
        </div>
        {showAboutList ? <AboutList /> : null}
        <div
          className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-full"
          onClick={() => SetShowWebList(!showWebList)}
        >
          {showWebList ? (
            <ChevronDownIcon className=" h-5 w-5 mr-1  text-yellow_vs" />
          ) : (
            <ChevronRightIcon className=" h-5 w-5 mr-1  text-yellow_vs" />
          )}
            
          <p className="">Projects</p>
        </div>
        {showWebList ? (
          <>
         
            {showWebList ? <WebList /> : null}
          </>
        ) : null}
      </div>
        <div className="absolute inset-x-0 bottom-10 ">
          <div className="flex flex-col items-center justify-center py-1 space-y-3 sm:space-x-2 sm:px-2 md:flex-row md:space-x-3  md:px-1 lg:space-x-7 lg:px-6">
            <a href="https://github.com/eseneose/">
              <img
                src={GitLogo}
                alt="Git Logo"
                className="h-6 w-6 pt-1 pl-1 text-yellow_vs sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
            <a href="https://facebook.com/drealose/">
              <img
                src={fbb}
                alt="Facebook Logo"
                className="h-5 w-5 pb-1 text-yellow_vs sm:h-5 sm:w-5 md:h-7 md:w-7 lg:h-9 lg:w-9 hover:cursor-pointer hover:h-10 hover:w-10"
              />
            </a>
            <a href="/">
              <img
                src={LinkedinLogo}
                alt="Linkedin Logo"
                className="h-6 w-6 text-yellow_vs sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 hover:cursor-pointer hover:h-12 hover:w-12"
  g            />
            </a>
            <a href="/">
              <img
                src={MailLogo}
                alt="Mail Logo"
                className="h-6 w-6 text-yellow_vs sm:h-6 sm:w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 hover:cursor-pointer hover:h-12 hover:w-12"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
