import { MailIcon } from '@heroicons/react/solid'
import React from 'react'

function Projects() {
  return (
    <div id="Projects" className="pb-72 mt-36">
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
        <div className='flex flex-row justify-between'>
            <img alt='project1' src="" />
            <img alt='project2' src="" />
            <img alt='project3' src="" />
            <img alt='project4' src="" />
            <img alt='project5' src="" />
            <img alt='project6' src="" />

        </div>
    </div>
  </div>
  )
}

export default Projects