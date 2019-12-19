import React, { useState } from "react";
import { Link } from "react-scroll";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const Nav = ({ changeStyle }) => {
  const { duration } = useState(500);
  let history = useHistory();

  console.log(history.location.pathname);

  return (
    <React.Fragment>
      {(history.location.pathname === "portfolio" && (
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
  changeStyle: PropTypes.object
};

export default Nav;
