import React from "react";
import PropTypes from "prop-types";

import Job from "./Experience/Job";

const Experience = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Experience {getDiff()}</h3>
    </div>
    {data.map(job => (
      <Job data={job} key={job.company} />
    ))}
  </div>
);

const getDiff = () => {
  const today = new Date();
  const past = new Date(2013, 6, 1);
  const diff = Math.floor(today.getTime() - past.getTime());
  const day = 1000 * 60 * 60 * 24;

  const days = Math.floor(diff / day);
  const months = Math.floor(days / 31);
  const years = Math.floor(months / 12);

  return `(${years}  years & ${months - years * 12} months)`;
};

Experience.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      position: PropTypes.string,
      link: PropTypes.string,
      daterange: PropTypes.string,
      points: PropTypes.arrayOf(PropTypes.string)
    })
  )
};

Experience.defaultProps = {
  data: []
};

export default Experience;
