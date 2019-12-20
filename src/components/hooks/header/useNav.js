import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useNavHook = () => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle(() => {
      if (!showNav && window.pageYOffset === 0) {
        return {
          header: {
            opacity: 0
          }
        };
      }
    });
  }, []);

  const showNav = useSelector(state => {
    return state.togglNav.showNav;
  });

  window.onscroll = () => {
    setStyle(() => {
      if (showNav && window.pageYOffset !== 0) {
        return {
          header: {
            position: "fixed",
            paddingTop: "0rem",
            background: "white",
            boxShadow: "-1px 0px 5px 0px rgba(211, 211, 211, 0.75)"
          },
          li: {
            padding: "2rem 1.5rem 2rem 1.5rem"
          }
        };
      } else if (!showNav && window.pageYOffset === 0) {
        return {
          header: {
            opacity: 0
          }
        };
      } else if (!showNav && window.pageYOffset !== 0) {
        return {
          header: {
            position: "fixed",
            paddingTop: "0rem",
            background: "white",
            boxShadow: "-1px 0px 5px 0px rgba(211, 211, 211, 0.75)"
          },
          li: {
            padding: "2rem 1.5rem 2rem 1.5rem"
          }
        };
      }
    });
  };

  return style;
};

export default useNavHook;
