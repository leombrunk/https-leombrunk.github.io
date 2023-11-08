import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  window.onclick = function (event) {
    var toggle = document.getElementById("menu-toggle");
    if (!event.target.matches("#menu-toggle") && toggle.checked) {
      toggle.checked = false;
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-contents">
        <input id="menu-toggle" type="checkbox" />
        <div className="menu-btn">
          <span />
        </div>
        <div className="navbar-box">
          <div className="navbar-left">
            <NavLink exact to="/" className="navbar-item">
              Home
            </NavLink>
            <NavLink to="/projects" className="navbar-item">
              Projects
            </NavLink>
            <NavLink to="/resume" className="navbar-item">
              Resume
            </NavLink>
            <NavLink to="/contact" className="navbar-item">
              Contact
            </NavLink>
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
            <a
              href="https://github.com/leombrunk"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://drive.google.com/uc?id=1oFyJEpxhjTbktCCu2aQPQm2dKb-Nj9V4"
                alt="Github"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
