import "./ProjectSummary.css";
import { NavLink } from "react-router-dom";

const ProjectSummary = ({ page, title, img, description }) => {
  return (
    <div className="project-summary">
      <NavLink to={`/projects/${page}`}>{title}</NavLink>
      <div className="project-details">
        <NavLink to={`/projects/${page}`}>
          <img src={img} alt={`${page}-thumbnail`} />
        </NavLink>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
