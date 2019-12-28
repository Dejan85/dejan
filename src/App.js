import React from "react";
import "./sass/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Header from "./components/layout/header/Header";
import Home from "./components/layout/home/Home";
import About from "./components/layout/about/About";
import Skills from "./components/layout/skills/Skills";
import Links from "./components/layout/links/Links";
import Projects from "./components/layout/projects/Projects";
import ProjectsPage from "./components/layout/projects/ProjectsPage";
import Blog from "./components/layout/blog/Blog";
// import Contact from './components/layout/contact/Contact';
import Footer from "./components/layout/footer/Footer";
import SinglePost from "./components/layout/singlePost/SignlePost";

// demo
import ColorGame from "./components/demo/colorGame/ColorGame";

//utils
import ContentEdit from "./components/layout/util/ContentEdit";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/portfolio">
              <Home />
              <About />
              <Links />
              <Skills />
              <Projects />
              <Blog />
              {/* <Contact /> */}
              <Footer />
            </Route>
            <Route exact path="/projects/:name">
              <SinglePost />
            </Route>
            <Route exact path="/projects">
              <ProjectsPage />
            </Route>
            <Route exact path="/demo/:name">
              <ColorGame />
            </Route>
            <Route exact path="/editcode">
              <ContentEdit />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
