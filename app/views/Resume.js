import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import Main from "../layouts/Main";

import Education from "../components/Resume/Education";
import Experience from "../components/Resume/Experience";
import Skills from "../components/Resume/Skills";
import Courses from "../components/Resume/Courses";
import References from "../components/Resume/References";
import SaveAlt from "@material-ui/icons/SaveAlt";

import courses from "../data/resume/courses";
import degrees from "../data/resume/degrees";
import positions from "../data/resume/positions";
import { skills, categories } from "../data/resume/skills";

const sections = [
  "Experience",
  "Skills",
  "Education",
  /*"Courses",*/ "References"
];

const Resume = () => (
  <Main>
    <Helmet title="Resume" />
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>Resume</h2>
            <div className="link-container side-by-side">
              {sections.map(sec => (
                <h4 key={sec}>
                  <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                </h4>
              ))}
            </div>
            <a href="https://drive.google.com/file/d/1b10kSglV5nWVieoHZKKyE1z-gAtsCb0J/view?usp=sharing" className="pull-right side-by-side" target="_blank">
              PDF &nbsp;<SaveAlt />
            </a>
        </div>
      </header>
      <Experience data={positions} />
      <Skills skills={skills} categories={categories} />
      <Education data={degrees} />
      {/* <Courses data={courses} /> */}
      <References />
    </article>
  </Main>
);

export default Resume;
