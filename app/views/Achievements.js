import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

import Main from "../layouts/Main";

import Cell from "../components/Projects/Cell";
import data from "../data/achievements";

const Achievements = () => (
  <Main>
    <Helmet title="Achievements" />
    <article className="post" id="Achievements">
      <header>
        <div className="title">
          <h2>Achievements</h2>
        </div>
      </header>
      {data.map(project => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Achievements;
