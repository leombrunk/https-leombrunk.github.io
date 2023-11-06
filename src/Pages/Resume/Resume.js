import "./Resume.css";
import Content from "../../Components/Content/Content";
import pdf from "../../Assets/KenLeombrunoSoftwareEngineerResume2023.pdf";

const Resume = () => {
  return (
    <Content>
      <div className="resume-container">
        <div id="download-resume">
          <a href={pdf} download>
            {" "}
            Download PDF{" "}
          </a>
        </div>
        <div id="resume-pdf">
          <iframe src={pdf} title="Resume" frameborder="0"></iframe>
        </div>
      </div>
    </Content>
  );
};

export default Resume;
