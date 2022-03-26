import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
  return (
    <div id="Resume" className="w-1/2 mt-64 text-justify ml-auto mr-60">
      <div>
        <div className="table">
          <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
          <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
            Resume
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5">
        <div className="flex flex-col">
          <div className="w-1/4">
            <code className="text-yellow_vs">Education</code>
          </div>
          <div className="w-3/4 pl-40">
            <code className="text-blue_vs">Institute of Management and Technology IMT</code>
            <br />
            <code className="italic text-m text-lightblue_vs">
              Higher National Diploma in Chemical Engineering Technology
            </code>
            <br />
            <code className="text-sm text-brown_vs">
              • Sept 2013 - August 2018
            </code>
          </div>
        </div>
        <div className="flex flex-col pt-20">
          <div className="w-1/4">
            <code className="text-yellow_vs">Work</code>
          </div>
          <div className="w-3/4 pl-40">
            <code className="text-blue_vs">Sapin Consolidated International</code>
            <br />
            <code className="italic text-m text-lightblue_vs">
              Jahi - FCT Abuja, Nigeria{" "}
            </code>
            <br />
            <code className="text-xs text-brown_vs">• October 2021 - March 2022</code>
            <br />
            <code className="text-m">
              <br />• Designed and developed new websites for each sub company
              <br /> <br />• Maintain existing company website and added new features including Login/Signup and authentification, Paystack integration and eccomerce functionality.  
              <br /> <br />• Developed custom software with AWS for operations and redirected a link from the website to the web app hosted on amplify.
              <br /> <br />• Developed a web app with react and facebook graphAPI for reading sponsored ads results and insight.
              <br /> <br />• Taught IT staff how to manage these websites and web apps.
             
            </code>
          </div>
          <div className="w-3/4 pl-40 mt-10">
            <code className="text-blue_vs">EasyITPro </code>
            <br />
            <code className="italic text-m text-lightblue_vs">
              Wuse II - FCT Abuja, Nigeria{" "}
            </code>
            <br />
            <code className="text-sm text-brown_vs">• August 2021 - Present</code>
            <br />
            <code className="text-m">
              
              <br />• Design.
              <br />• Suspendisse pretium fermentum luctus.
              <br />• Maecenas vitae vestibulum ipsum, ut varius diam.
              <br />• Phasellus mattis nunc vel purus maximus.
            </code>
          </div>
          <div className="w-3/4 pl-40 mt-10">
            <code className="text-blue_vs">GrowthHacks Digital Solution</code>
            <br />
            <code className="italic text-m text-lightblue_vs">
              MaryLand - Enugu, Nigeria{" "}
            </code>
            <br />
            <code className="text-sm text-brown_vs">• October 2018 - February 2021</code>
            <br />
            <code className="text-m">
              <br />• Develop ne
              <br />• Sed id eros non nisi vulputate eleifend. Vestibulum erat
              ipsum, lacinia ut nibh ut, pulvinar interdum lorem.
              <br />• Aliquam et nisi eu risus ultrices suscipit nec nec quam.
              <br />• Suspendisse pretium fermentum luctus.
              <br />• Maecenas vitae vestibulum ipsum, ut varius diam.
              <br />• Phasellus mattis nunc vel purus maximus.
            </code>
          </div>
        </div>
        <div className="flex flex-row pt-20 flex-wrap">
          <div className="w-1/4">
            <code className="text-yellow_vs">Skills</code>
          </div>
          <div className="w-3/4">
            <code className="text-sm">
              <br /> <span className="text-brown_vs font-mono font-semibold">Frontend Development</span>
              <br />• React.js / Next.js
              <br />• Vue.js
              <br />• Styled Components
              <br />• Tailwind css
              <br />• Material Ui 
              <br />• Bootstrap

              <br /> <br /><span className="text-brown_vs font-mono font-semibold">Backend Development</span>
              <br />• Node.js (and its various Libraries)
              <br />• Express.js 
              <br />• Django /Django Rest Framework

              <br /> <br /><span className="text-brown_vs font-mono font-semibold">Tools & Platforms</span>
              <br />• Git /GitHub & Github pages
              <br />• Firebase 
              <br />• Amazon Web Services (AWS)
              <br />• Docker 
              <br />• Webpack 
              <br />• WordPress 
              <br />• Heroku 
              <br />• Vercel

              <br /> <br /><span className="text-brown_vs font-mono font-semibold">Programming Languages </span>
              <br />• JavaScript 
              <br />• Python 
              <br />• C#
              <br />• HTML5
              <br />• CSS /SaSS
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
