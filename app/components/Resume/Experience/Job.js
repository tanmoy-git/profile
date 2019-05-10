import React from "react";
import PropTypes from "prop-types";

const Job = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h4>
        <a href={data.link} target="_blank">
          {data.company}
        </a>{" "}
        - {data.position}
      </h4>
      <p className="daterange"> {data.daterange}</p>
    </header>
    <ul className="points">
      {data.points.map(point => (
        <li key={point.product}>
          {point.product}
          <br />
          Tech Stack : {point.techstack}
          <br />
          <a href={point.producturl} target="_blank">
            {point.producturl}
          </a>
        </li>
      ))}
    </ul>
  </article>
);

Job.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default Job;
