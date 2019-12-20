import React, { useEffect } from "react";
import { Link } from "react-scroll";

// hooks
import useResetScroll from "../../hooks/global/useResetScroll";

// images
import images from "../../json/images.json";

const Home = () => {
  const { resetScroll } = useResetScroll();

  useEffect(() => {
    resetScroll();
  }, [resetScroll]);

  return (
    <div className="home">
      <div className="home__content">
        <div className="home__text">
          <p
            className="home__p"
            style={{ fontSize: "4rem", fontWeight: "700" }}
          >
            <span className="home__span">He</span>llo,
          </p>
          <p className="home__p">
            I<span className="home__span">`am</span> Dej
            <span className="home__span">an,</span>
          </p>
          <p className="home__p">
            <span className="home__span"> Java</span>scrip
            <span className="home__span">t</span>
            <span className="home__span"> developer.</span>
          </p>
          <p className="home__btn">
            <Link
              className="home__link"
              to="about"
              spy={true}
              smooth={"true"}
              offset={-150}
            >
              Lets meet
            </Link>
          </p>
        </div>
        <div
          className="home__picture"
          style={{ background: `url(${images.homePage.home})` }}
        />
      </div>
    </div>
  );
};

export default Home;
