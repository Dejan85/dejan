import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//components
// import OtherProjects from './OtherProjects';
import ImageFullscreen from "./ImagFullscreen";

// hooks
import useResetScroll from "../../hooks/global/useResetScroll";
// import useJson from '../../hooks/global/useJson';
// import useScrollIndicator from '../../hooks/global/useScrollIndicator';

// redux
import { disableNav } from "../../../redux/actions/togglNav";
//json

const SinglePost = ({ projects, disableNav }) => {
  const { resetScroll } = useResetScroll();
  const { name } = useParams();
  const [content, setContent] = useState();
  const [imageFullscreen, setImageFullscreen] = useState(false);
  const [imgSrc, setImageSrc] = useState();
  const singlePostCodeRef = useRef();
  const [waitForCode, setWaitForCode] = useState(false);
  const abortController = new AbortController();
  // const { getJson } = useJson();
  // const { scrollIndicator } = useScrollIndicator();

  useEffect(() => {
    // this is for responsive every LINE of code in code div
    [...singlePostCodeRef.current.children].map(item => {
      if (item.className === "singlePost__code") {
        [...item.children].map(item2 => {
          [...item2.children].forEach(child => {
            child.style.display = "flex";
            child.style.flexWrap = "wrap";
          });
        });
      }
      return null;
    });

    return resetScroll();
  }, [waitForCode]);

  useEffect(() => {
    setTimeout(() => {
      setWaitForCode(true);
    }, 100);
    abortController.abort();
    disableNav();
  }, []);

  useEffect(() => {
    projects &&
      projects.map(item => {
        if (item.id === name) {
          setContent(() => {
            return item;
          });
        }
        return null;
      });
  }, [projects]);

  // useMemo(() => {
  // 	setContent(getJson(name));
  // }, []);

  const fullscreenImage = img => {
    setImageFullscreen(!imageFullscreen);
    setImageSrc(img);

    document.body.onwheel = () => {
      if (!imageFullscreen) {
        setImageFullscreen(false);
      }
    };
  };

  return (
    <div
      className="singlePost"
      style={{ background: `url(${content && content.image})` }}
    >
      {/* {scrollIndicator()} */}
      <div className="singlePost__container">
        <div className="singlePost__content">
          <div className="singlePost__header">
            <h1
              className="singlePost__h1"
              style={{ background: content && content.color }}
            >
              {content && content.name}
            </h1>
          </div>
          <div className="singlePost__content2">
            <div className="singlePost__left" ref={singlePostCodeRef}>
              {content &&
                content.text.map(item => {
                  if (item.name === "h2") {
                    return (
                      <h2 className="singlePost__h2" key={item.content}>
                        {item.content}
                      </h2>
                    );
                  }

                  if (item.name === "h4") {
                    return (
                      <h4 className="singlePost__h4" key={item.content}>
                        {item.content}
                      </h4>
                    );
                  }

                  if (item.name === "h5") {
                    return (
                      <h5 className="singlePost__h5" key={item.content}>
                        {item.content}
                      </h5>
                    );
                  }

                  if (item.name === "p") {
                    return (
                      <p className="singlePost__p" key={item.content}>
                        {item.content}
                      </p>
                    );
                  }
                  if (item.name === "images") {
                    return (
                      <img
                        className="singlePost__image"
                        src={item.content}
                        alt="img"
                        key={item.content}
                        onClick={fullscreenImage.bind(null, item.content)}
                      />
                    );
                  }

                  if (waitForCode && item.name === "code") {
                    return (
                      <div className="singlePost__code" key={item.content}>
                        {parse(item.content)}
                      </div>
                    );
                  }
                  return null;
                })}
            </div>
            <div className="singlePost__right">
              <h3 className="singlePost__h3">Technology:</h3>
              <ul className="singlePost__ul">
                {content &&
                  content.technology.map(item => {
                    return (
                      <li className="singlePost__li" key={item}>
                        {item}
                      </li>
                    );
                  })}
              </ul>
              <div className="singlePost__git">
                <h3 className="singlePost__h3">Description:</h3>
                <a
                  className="singlePost__git--link"
                  href={content && content.git}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github-square singlePost__git--icon" />
                  <p>Git repository</p>
                </a>
                <a
                  className="singlePost__git--link"
                  href={content && content.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {(window.opr && (
                    <i className="fab fa-opera singlePost__git--icon" />
                  )) ||
                    (window.chrome && (
                      <i className="fab fa-chrome singlePost__git--icon" />
                    )) ||
                    (typeof InstallTrigger !== "undefined" && (
                      <i className="fab fa-firefox  singlePost__git--icon" />
                    )) || <i className="fab fa-opera singlePost__git--icon" />}
                  <p>Try demo</p>
                </a>
              </div>
              {/* <div className="singlePost__other">
								<h3 className="singlePost__h3">Other projects:</h3>
								<div className="singlePost__other--content">
									<OtherProjects />
									<OtherProjects />
									<OtherProjects />
								</div>
							</div> */}
            </div>
          </div>
        </div>
      </div>
      {imageFullscreen && (
        <ImageFullscreen fullscreenImage={fullscreenImage} imgSrc={imgSrc} />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  const { projects } = state.projects;
  return { projects };
};

const mapDispatchToProps = { disableNav };

SinglePost.propTypes = {
  projects: PropTypes.array,
  disableNav: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
