import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>{data.title}</h3>
        <time className="published">{data.date}</time>
      </header>
      <div className="image">
        <img src={`${BASE_PATH}${data.image}`} alt="" />
      </div>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  }).isRequired
};

export default Cell;
