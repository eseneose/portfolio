import React, { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import LeftBar from "./LeftBar";
import Projects from "./Projects";
import Resume from "./Resume";

const Home = () => {
  const [scroll, SetScroll] = useState();

  useEffect(() => {
    return scroll
      ? document
          .getElementById(scroll)
          .scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          })
      : null;
  }, [scroll]);

  return (
    <>
      <div id="home" className="App flex ">
        <div className="bg-[#262526] w-14 fixed h-full sm:w-20 md:w-40 lg:w-72 ">
          <LeftBar scroll={scroll} SetScroll={SetScroll} />
        </div>
        <div className="bg-[#1e1e1e] h-full ml-10 px-10 w-full min-w-72 sm:ml-20 md:ml-40 lg:ml-72">
          <Header scroll={scroll} SetScroll={SetScroll} />
          <About id="About" />
          <Resume id="Resume" />
          <Projects id="Projects"/>
          <Contact id="Contact" />
        </div>
      </div>
    </>
  );
};

export default Home;
