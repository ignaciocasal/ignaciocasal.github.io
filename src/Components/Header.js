import React from "react";
import ParticlesBg from "particles-bg";
import SocialLinks from "./SocialLinks";

const Header = ({data}) => {
  if (!data) return null;
  const {name, description, social} = data;

  return (
      <header id="home">
        <ParticlesBg type="cobweb" color='#CC9CFF' bg={true}/>

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}</h3>
            <hr/>
           {/*<ul className="social">
              <a href={resumedownload} target="_blank" className="button btn project-btn" rel="noreferrer">
                <i className="fa fa-book"/>Resume
              </a>
              <a href={github} target="_blank" className="button btn github-btn" rel="noreferrer">
                <i className="fa fa-github"/>Github
              </a>
            </ul>*/}
            <SocialLinks networks={social}/>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"/>
          </a>
        </p>
      </header>
  );
};

export default Header;
