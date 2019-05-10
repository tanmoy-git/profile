import React from "react";
import PropTypes from "prop-types";

const SkillBar = ({ data, categories }) => {
  const { category, compentency, title } = data;

  // TODO: Consider averaging colors
  const titleStyle = {
    background: categories
      .filter(cat => category.includes(cat.name))
      .map(cat => cat.color)[0]
  };

  const barStyle = {
    ...titleStyle,
    width: `${String(Math.min(100, Math.max((compentency / 5.0) * 100.0, 0)))}%`
  };

  const progressBar = {
    height: "24px",
    width: "50%"
  };

  const srcUrl = `${BASE_PATH}/logos/${title}.png`;

  return (
    <div className="skill-image">
      {/* <div className="w3-light-grey">
        <div className="w3-grey" style={rating} />
      </div> */}
      <img className="img-style" src={srcUrl} alt={title} />
      <div className="text-style">
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={compentency * 10}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              width: compentency * 10 + "%",
              background:
                compentency > 7
                  ? "#3e6003"
                  : compentency > 6
                  ? "#248e0f"
                  : "#3cdb1c"
            }}
          />
          <div className="progress-bar-title">{compentency}</div>
        </div>
        {title}
        <br />
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    compentency: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string
    })
  )
};

SkillBar.defaultProps = {
  categories: []
};

export default SkillBar;
