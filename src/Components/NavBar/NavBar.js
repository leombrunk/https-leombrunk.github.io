import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="navbar-right">
        <a
          href="https://www.youtube.com/channel/UCpTUj6kSFKOkkrExzLn7jFw?"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://drive.google.com/uc?id=1J5MX2VQnpqRbJPEPw4_cRERgiemD2b1q"
            alt="Youtube"
            className="wide-image"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/kenneth-leombruno-551395166/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://drive.google.com/uc?id=1AcYVfZZqOlS9eFekDzgKLM47sHqCKzj4"
            alt="LinkedIn"
          />
        </a>
        <a href="https://github.com/leombrunk" target="_blank" rel="noreferrer">
          <img
            src="https://drive.google.com/uc?id=1oFyJEpxhjTbktCCu2aQPQm2dKb-Nj9V4"
            alt="Github"
          />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
