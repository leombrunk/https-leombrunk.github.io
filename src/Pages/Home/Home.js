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
              My name is Ken Leombruno and welcome to my personal website. I am
              a computer engineer with a minor in computer science. I graduated
              from Northeastern University in January 2020. Previously I've
              worked as an Embedded Software Engineer while on Co-op at Draeger
              from September 2018 to April 2019. I enjoy working on DIY projects
              and plan to use this website to keep track of my projects while
              also providing resources for anyone working on something similar.
            </p>
            <p>
              This website is a single page web app made with React. Due to the
              file size limit of github, all images are being hosted on google
              drive which slows page load times.
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
