import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__boxContainer">
            <div className="footer__box">
              <h5 className="footer__h5">Ltes talk about</h5>
              <p className="footer__p">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Far far
                away, behind the word mountains, far from the countries Vokalia
                and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="footer__box" style={{ padding: "0 0 0 7rem" }}>
              <h5 className="footer__h5">Links</h5>
              <ul className="footer__ul">
                <li className="footer__li">
                  <i className="fas fa-long-arrow-alt-right" />
                  <Link
                    className="footer__link"
                    to="home"
                    spy={true}
                    smooth={"true"}
                    offset={-150}
                  >
                    Home
                  </Link>
                </li>
                <li className="footer__li">
                  <i className="fas fa-long-arrow-alt-right" />
                  <Link
                    className="footer__link"
                    to="about"
                    spy={true}
                    smooth={"true"}
                    offset={-150}
                  >
                    About
                  </Link>
                </li>
                <li className="footer__li">
                  <i className="fas fa-long-arrow-alt-right" />
                  <Link
                    className="footer__link"
                    to="skills"
                    spy={true}
                    smooth={"true"}
                    offset={-150}
                  >
                    Skills
                  </Link>
                </li>
                <li className="footer__li">
                  <i className="fas fa-long-arrow-alt-right" />
                  <Link
                    className="footer__link"
                    style={{ color: "white" }}
                    to="projects"
                    spy={true}
                    smooth={"true"}
                    offset={-150}
                  >
                    Projects
                  </Link>
                </li>
                <li className="footer__li">
                  <i className="fas fa-long-arrow-alt-right" />
                  <Link
                    className="footer__link"
                    to="blog"
                    spy={true}
                    smooth={"true"}
                    offset={-150}
                    style={{ color: "white" }}
                  >
                    Blog
                  </Link>
                </li>
                {/* <li className="footer__li">
									<i className="fas fa-long-arrow-alt-right" />
									<Link
										className="footer__link"
										to="contact"
										spy={true}
										smooth={'true'}
										style={{ color: 'white' }}
									>
										Contact
									</Link>
								</li> */}
              </ul>
            </div>
          </div>
          <div className="footer__boxContainer">
            <div className="footer__box2" style={{ padding: "0 5rem 0 0" }}>
              <h5 className="footer__h5">Services</h5>
              <ul className="footer__ul">
                <li className="footer__li">Responsive web page</li>
                <li className="footer__li">CRUD App</li>
                <li className="footer__li">SPA Applications</li>
                <li className="footer__li">REST App</li>
                <li className="footer__li">MERN App</li>
                <li className="footer__li">Custom CMS</li>
              </ul>
            </div>

            <div className="footer__box2">
              <h5 className="footer__h5">Personal info</h5>
              <ul className="footer__ul">
                <li className="footer__li">
                  <i className="fas fa-envelope footer__icon" />
                  xypnotica@gmail.com
                </li>
                <li className="footer__li">
                  <i className="fas fa-phone  footer__icon" /> 069/1907978
                </li>
                <li className="footer__li">
                  <i className="fab fa-viber  footer__icon" />
                  069/1907978
                </li>
                <li className="footer__li">
                  <i className="fab fa-github  footer__icon" />
                  www.github.com/Dejan85
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__copyright">Devxad ©2019 by Dejan Markovic</div>
      </div>
    </div>
  );
};

export default Footer;
