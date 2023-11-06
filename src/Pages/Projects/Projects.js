import "./Projects.css";
import Content from "../../Components/Content/Content";
import ProjectSummary from "../../Components/ProjectSummary/ProjectSummary";

const Projects = ({ projects }) => {
  return (
    <Content>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectSummary
            page={project.page}
            title={project.title}
            img={project.img}
            description={project.description}
          />
        ))}
      </div>
    </Content>
  );
};

export default Projects;
