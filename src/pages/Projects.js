import { MailIcon } from '@heroicons/react/solid'
import React from 'react'
const covid_App = require("../assets/covid_tracker_app.png");
const food_recipe = require("../assets/food_recipe.png");
const google_clone = require("../assets/google_clone_app.png");

function Projects() {
  return (
    <div id="Projects" className="pb-20  mt-36">
    <div className="table mx-60">
      <MailIcon className="h-5 w-5 mr-4 text-yellow_vs" />
      <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
        Projects
      </code>
      <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
    </div>
    <div className="text-[#a2aabc] text-lg mt-5 mx-60 flex flex-col items-center text-justify">
      <code>
        I am open to new challenges and excited to solve web development problems.
        for a discussion, a project or general consulting, send me a mail for free and i will get back to you asap. 
      </code>
        <div className="flex items-center space-x-14 pt-40">
           
              <a href="https://bit.ly/covid_tracker_app" className='flex items-center'>
                <img
                  src={covid_App}
                  alt="covid app"
                  className=" flex items-center h-14 w-14 text-yellow_vs hover:cursor-pointer hover:h-15 hover:w-15"
                />
                <span className="text-brown_vs font-mono pl-4 font-semibold">Covid app</span>
              </a>

              <a href="https://bit.ly/food_recipe" className='flex items-center'>
                <img
                  src={food_recipe}
                  alt="fpod recipe app"
                  className="h-14 w-14 text-yellow_vs hover:cursor-pointer hover:h-15 hover:w-15"
                />
                <span className="text-brown_vs font-mono pl-4 font-semibold">Food recipe</span>
              </a>

              <a href="https://easy-google.vercel.app" className='flex items-center'>
                <img
                  src={google_clone}
                  alt="google clone app"
                  className="h-14 w-14 text-yellow_vs hover:cursor-pointer hover:h-15 hover:w-15"
                />
                <span className="text-brown_vs font-mono pl-4 font-semibold">Google clone</span>
              </a>   
        </div>
    </div>
  </div>
  )
}

export default Projects