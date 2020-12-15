import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume"
import Selenium from "./Projects/Selenium"
import Website from "./Projects/Website"
 
class Main extends Component {
    render() {
        return (
        <HashRouter>
            <div>
                <div className="navbar">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/resume">Resume</NavLink>
                    <NavLink to="/contact">Contact</NavLink>

                    <div className="navbar-right">
                        <a href="https://github.com/leombrunk" target="_blank" rel="noreferrer">
                            <img src="https://drive.google.com/uc?id=1oFyJEpxhjTbktCCu2aQPQm2dKb-Nj9V4" alt="Github" width="30" height="30" />
                        </a>
                        <a href="https://www.linkedin.com/in/kenneth-leombruno-551395166/" target="_blank" rel="noreferrer">
                            <img src="https://drive.google.com/uc?id=1AcYVfZZqOlS9eFekDzgKLM47sHqCKzj4" alt="LinkedIn" width="30" height="30" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCpTUj6kSFKOkkrExzLn7jFw?" target="_blank" rel="noreferrer">
                            <img src="https://drive.google.com/uc?id=1J5MX2VQnpqRbJPEPw4_cRERgiemD2b1q" alt="Youtube" width="40" height="30" />
                        </a>
                    </div>
                </div>
                <div className="banner-background">
                    <div className="banner-logo">
                        <a href="index.html">
                            <img src="https://drive.google.com/uc?id=1lwGO5RhEJhkXL57UKMiDGwZK3cXwkKGN" alt="Banner" />
                        </a>
                    </div>
                </div>
                <div className="main">
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/projects" component={Projects}/>
                        <Route path="/resume" component={Resume}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/projects/selenium" component={Selenium}/>
                        <Route path="/projects/website" component={Website}/>
                    </div>
                    <div className="footer">
                        <a href="https://github.com/leombrunk" target="_blank" rel="noreferrer"> Github </a>
                        <a href="https://www.linkedin.com/in/kenneth-leombruno-551395166/" target="_blank" rel="noreferrer"> LinkedIn </a>
                        <a href="https://www.youtube.com/channel/UCpTUj6kSFKOkkrExzLn7jFw?" target="_blank" rel="noreferrer"> Youtube </a>
                    </div>
                </div>
            </div>
        </HashRouter>
        );
    }
}
 
export default Main;