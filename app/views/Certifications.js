import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import Main from "../layouts/Main";

import Cell from "../components/Projects/Cell";
import data from "../data/certifications";

const Certifications = () => (
  <Main>
    <Helmet title="Certifications" />
    <article className="post" id="Certifications">
      <header>
        <div className="title">
          <h2>Certifications</h2>
        </div>
      </header>
      {data.map(project => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Certifications;
