import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import Main from "../layouts/Main";

import Cell from "../components/Projects/Cell";
import data from "../data/projects";

const Projects = () => (
  <Main>
    <Helmet title="Projects" />
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>Projects</h2>
          <p>Please note the details provided here are abiding by the non-disclosure agreemet of the companies</p>
          <p>No Confidential Information was/ is/ will be revealed</p>
        </div>
      </header>
      {data.map(project => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Projects;
