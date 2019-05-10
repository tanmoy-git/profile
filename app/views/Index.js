import React from "react";
import { Link } from "react-router-dom";

import Main from "../layouts/Main";

const Index = () => (
  <div className="landing-container landing-page" id="index">
    <header>
      <div className="title">
        <h2>
          <Link to="/">Tanmoy Bhattacharjee</Link>
        </h2>
        <p>A believer in minimalistic design concepts.</p>
      </div>
    </header>
    <div id="categories">
      <div className="responsive">
        <div className="pull-down">
          <div className="flip-container">
            <div className="flipper">
              <div className="front">
                <img src={`${BASE_PATH}/images/swengineer.jpg`} alt="" />
              </div>
              <div className="back">
                <Link to="/about">Take me to your website</Link>
              </div>
            </div>
          </div>

          <h4 className="user-type">
            I am a Techie, and I just want to know about you
          </h4>
        </div>
      </div>
      <div className="responsive">
        <div className="pull-down">
          <div className="flip-container">
            <div className="flipper">
              <div className="front">
                <img src={`${BASE_PATH}/images/resume.jpg`} alt="" />
              </div>
              <div className="back">
                <Link to="/resume">Take me to your resume</Link>
              </div>
            </div>
          </div>

          <h4 className="user-type">
            I am a recruiter, I am interested in your resume
          </h4>
        </div>
      </div>
    </div>
  </div>
);

export default Index;
