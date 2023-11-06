import "./Banner.css";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <NavLink exact to="/">
        <img
          src="https://drive.google.com/uc?id=1lwGO5RhEJhkXL57UKMiDGwZK3cXwkKGN"
          alt="Banner"
        />
      </NavLink>
    </div>
  );
};

export default Banner;
