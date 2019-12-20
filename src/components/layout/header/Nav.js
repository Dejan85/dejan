import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

const Nav = ({ changeStyle, showNav }) => {
  const { duration } = useState(500);
  let history = useHistory();

  return (
    <React.Fragment>
      {(showNav && (
        <ul className="header__ul">
          <li className="header__li" style={changeStyle}>
            <Link
              className="header__link"
              activeClass="active"
              to="home"
              spy={true}
              smooth={"true"}
              duration={duration}
              offset={-150}
            >
              Home
            </Link>
          </li>
          <li className="header__li" style={changeStyle}>
            <Link
              className="header__link"
              activeClass="active"
              to="about"
              spy={true}
              smooth={"true"}
              duration={duration}
              offset={-150}
            >
              About
            </Link>
          </li>
          <li className="header__li" style={changeStyle}>
            <Link
              className="header__link"
              activeClass="active"
              to="skills"
              spy={true}
              smooth={"true"}
              duration={duration}
              offset={-150}
            >
              Skills
            </Link>
          </li>
          <li className="header__li" style={changeStyle}>
            <Link
              className="header__link"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={"true"}
              duration={duration}
              offset={-150}
            >
              Projects
            </Link>
          </li>
          <li className="header__li" style={changeStyle}>
            <Link
              className="header__link"
              activeClass="active"
              to="blog"
              spy={true}
              smooth={"true"}
              duration={duration}
              offset={-150}
            >
              Blog
            </Link>
          </li>
          {/* <li className="header__li" style={changeStyle}>
						<Link
							className="header__link"
							activeClass="active"
							to="contact"
							spy={true}
							smooth={'true'}
							duration={duration}
							offset={-50}
						>
							Contact
						</Link>
					</li> */}
        </ul>
      )) || (
        <ul className="header__ul">
          <li className="header__li" style={changeStyle}>
            <p className="header__link" onClick={history.goBack}>
              Go Back
            </p>
          </li>
        </ul>
      )}
    </React.Fragment>
  );
};

Nav.propTypes = {
  changeStyle: PropTypes.object,
  togglNav: PropTypes.object
};

const mapStateToProps = state => {
  const { togglNav } = state;
  return togglNav;
};

export default connect(mapStateToProps, null)(Nav);
