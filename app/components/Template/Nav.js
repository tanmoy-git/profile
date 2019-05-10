import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../data/contact";

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Tanmoy Bhattacharjee</h2>
        <p>
          <a href="mailto:tanmoy.the.champ@gmail.com">
            tanmoy.the.champ@gmail.com
          </a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Tanmoy. I like building software solutions. I graduated
        from{" "}
        <a href="http://psgtech.edu/" target="_blank">
          PSG Tech
        </a>{" "}
        in 2013, and since then, I am serving the ever expanding Corporate IT
        sector. Currently appointed as a Full Stack software engineer at{" "}
        <a href="https://www.propertyguru.com.sg/">PropertyGuru</a>. Before
        PropertyGuru I was at{" "}
        <a href="https://www.usa.philips.com/healthcare">Philips Healthcare</a>,{" "}
        <a href="https://www.homelane.com/">HomeLane</a> and{" "}
        <a href="https://www.ebay.com/">Ebay</a>.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">
        &copy; Tanmoy Bhattacahrjee <Link to="/">mldangelo.com</Link>.
      </p>
    </section>
  </section>
);

export default Nav;
