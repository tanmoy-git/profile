import React, { Component } from "react";
import PropTypes from "prop-types";

import CategoryButton from "./Skills/CategoryButton";
import SkillBar from "./Skills/SkillBar";

const handleProps = ({ categories, skills }) => ({
  buttons: categories
    .map(cat => cat.name)
    .reduce(
      (obj, key) => ({
        ...obj,
        [key]: false
      }),
      { All: true }
    ),
  skills: skills.map(skill =>
    Object.assign(skill, {
      category: skill.category.sort()
    })
  )
});

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = handleProps({
      categories: props.categories,
      skills: props.skills
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      handleProps({
        categories: nextProps.categories,
        skills: nextProps.skills
      })
    );
  }

  getRows() {
    // search for true active categorys
    const actCat = Object.keys(this.state.buttons).reduce(
      (cat, key) => (this.state.buttons[key] ? key : cat),
      "All"
    );

    return this.state.skills
      .sort((a, b) => {
        let ret = 0;
        if (a.compentency > b.compentency) ret = -1;
        else if (a.compentency < b.compentency) ret = 1;
        else if (a.category[0] > b.category[0]) ret = -1;
        else if (a.category[0] < b.category[0]) ret = 1;
        else if (a.title > b.title) ret = 1;
        else if (a.title < b.title) ret = -1;
        return ret;
      })
      .filter(skill => actCat === "All" || skill.category.includes(actCat))
      .map(skill => (
        <SkillBar
          categories={this.props.categories}
          data={skill}
          key={skill.title}
        />
      ));
  }

  getPapers() {
    return (
      <div>
        <h4>
          Patent: AI enabled Personal Healthcare Companion – an E2E solution
        </h4>
        <p className="metadata">
          Company: Philips, Status: Submitted, Intellectual Property ID: 82187,
          Submission ID: 2017ID05305
        </p>

        <h4>
          Paper: A Cost Effective Solution For Control Of A Mobile Embedded
          System Using GPRS
        </h4>
        <p className="metadata">IEEE endorsed, ISBN: 978-1-4673-1850-1</p>
      </div>
    );
  }

  getButtons() {
    return Object.keys(this.state.buttons).map(key => (
      <CategoryButton
        label={key}
        key={key}
        active={this.state.buttons}
        handleClick={this.handleChildClick}
      />
    ));
  }

  handleChildClick = label => {
    this.setState(prevState => {
      // Toggle button that was clicked. Turn all other buttons off.
      const buttons = Object.keys(prevState.buttons).reduce(
        (obj, key) => ({
          ...obj,
          [key]: label === key && !prevState.buttons[key]
        }),
        {}
      );
      // Turn on 'All' button if other buttons are off
      buttons.All = !Object.keys(prevState.buttons).some(key => buttons[key]);
      return { buttons };
    });
  };

  render() {
    return (
      <div className="skills">
        <div className="link-to" id="skills" />
        <div className="title">
          <h3>Skills</h3>
          <p>
            Note: I think these sections are silly, but everyone seems to have
            one.
          </p>
          <h4>Top Skill: Learning a new skill</h4>
          <br />
          <h4>
            Expertise: Data Structures and Algorithm, System Design (LLD & HLD)
          </h4>
          <br />
          {this.getPapers()}
          <h4>Technical Skills</h4>
          <br />
        </div>
        {/* <div className="skill-button-container">{this.getButtons()}</div> */}
        <div className="col-xs-6 col-sm-3 align-center-full-width">
          {this.getRows()}
        </div>
      </div>
    );
  }
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      compentency: PropTypes.number,
      category: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string
    })
  )
};

Skills.defaultProps = {
  skills: [],
  categories: []
};

export default Skills;
