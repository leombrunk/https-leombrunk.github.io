import "./Home.css";
import Content from "../../Components/Content/Content";

const Home = () => {
  return (
    <Content>
      <div className="home-container">
        <div className="introduction">
          <div id="profile-pic">
            <img
              src="https://drive.google.com/uc?id=1qBdhs9-ABgFAnyxyN4_v7t_T3DwcQdVZ"
              alt="Ken"
            />
          </div>
          <div className="intro-text">
            <h1> About Me </h1>
            <p>
              &emsp;Hello and welcome to my personal website! My name is Ken
              Leombruno and I am a Senior Software Engineer with over 5 years
              experience. I'm a fullstack engineer who leans more backend and I
              have a lot of experience with AWS and python. I currently work
              remote at Impel where I design reusable, scalable pipelines used
              as company standards for data integrations and API design. I've
              lead multiple data integrations with large enterprise customers to
              successful completion, which for one integration has contributed
              over $300k in MRR for the company on a tight deadline. I also
              mentor several newhires, assigning them tickets and taking
              responsibility over their tasks completion. <br /> &emsp;
              Previously I've worked as a Fullstack Developer Consultant at PWV
              and as an Embedded Software Engineer while on Co-op at Draeger. I
              graduated from Northeastern University in January 2020 with a
              degree in computer engineering and a minor in computer science. I
              enjoy working on DIY projects and plan to use this website to keep
              track of my projects and notes while also providing resources for
              anyone working on something similar.
              <br /> &emsp; This website is a single page web app made with
              React. Due to the file size limit of github, all images are being
              hosted on google drive which slows page load times.
            </p>
          </div>
        </div>
        <div className="video-container">
          <div className="video-padding" />
          <div className="latest-video">
            <h2>Latest Video:</h2>
            <div load="copytable()">
              <iframe
                title="Youtube Video"
                src="https://www.youtube.com/embed?listType=user_uploads&list=TheMightyGir"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="video-padding" />
        </div>
      </div>
    </Content>
  );
};

export default Home;
