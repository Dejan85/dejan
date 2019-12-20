import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// hooks
import useJson from "../../hooks/global/useJson";

// redux
import { showNav } from "../../../redux/actions/togglNav";

const Projects = ({ showNav }) => {
  const [projects, setProjects] = useState();
  const { getJson } = useJson();

  useEffect(() => {
    setProjects(() => {
      return getJson("allprojects");
    });
    showNav();
  }, []);

  return (
    <div className="projects">
      <h6 className="projects__h6">Portfolio...</h6>
      <h2 className="projects__h2">My Projects</h2>
      {/* <p className="projects__p">
				Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
			</p> */}
      <div className="projects__grid">
        <div className="projects__grid--row">
          <div className="projects__grid--columns">
            <div
              className="projects__grid--columns--child"
              style={{
                backgroundImage: `url(${projects && projects[0].image})`
              }}
            >
              <Link
                to={`/projects/${projects && projects[0].id}`}
                className="projects__grid--columns--child--content"
              >
                <h5 className="projects__grid--h5">
                  {projects && projects[0].name}
                </h5>
                <p className="projects__grid--p">Read more</p>
              </Link>
            </div>
          </div>
          <div className="projects__grid--columns2">
            <div
              className="projects__grid--columns2--child1"
              style={{
                backgroundImage: `url(${projects && projects[1].image})`
              }}
            >
              <Link
                to={`/projects/${projects && projects[1].id}`}
                className="projects__grid--columns--child--content"
              >
                <h5 className="projects__grid--h5">
                  {projects && projects[1].name}
                </h5>
                <p className="projects__grid--p">Read more</p>
              </Link>
            </div>
            <div
              className="projects__grid--columns2--child2"
              style={{
                backgroundImage: `url(${projects && projects[2].image})`
              }}
            >
              <Link
                to={`/projects/${projects && projects[2].id}`}
                className="projects__grid--columns--child--content"
              >
                <h5 className="projects__grid--h5">
                  {projects && projects[2].name}
                </h5>
                <p className="projects__grid--p">Read more</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="projects__grid--row2">
          <div className="projects__grid--columns3">
            <div
              className="projects__grid--columns3--child"
              style={{
                backgroundImage: `url(${projects && projects[3].image})`
              }}
            >
              <Link
                to={`/projects/luckgame`}
                className="projects__grid--columns--child--content"
              >
                <h5 className="projects__grid--h5">
                  {projects && projects[3].name}
                </h5>
                <p className="projects__grid--p">Read more</p>
              </Link>
            </div>
          </div>
          {/* <div className="projects__grid--columns4">
						<div className="projects__grid--columns4--child">
							<Link to="/projects/portfolio" className="projects__grid--columns--child--content">
								<h5 className="projects__grid--h5">Portfolio</h5>
								<p className="projects__grid--p">Read more</p>
							</Link>
						</div>
					</div> */}
        </div>
      </div>
      <p className="projects__btn">
        <Link className="projects__link" to="/projects">
          See all projects
        </Link>
      </p>
    </div>
  );
};

const mapDispatchToProps = {
  showNav
};

export default connect(null, mapDispatchToProps)(Projects);
