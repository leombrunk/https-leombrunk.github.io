import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
        <div>
            <div className="intro-text">
                <img src="https://drive.google.com/uc?id=1qBdhs9-ABgFAnyxyN4_v7t_T3DwcQdVZ" alt="Ken" width="300" height="300" id="profile-pic" />
                <h1> About Me </h1>
                <p>
                        My name is Ken Leombruno and welcome to my personal website.  I am a computer
                    engineer with a minor in computer science.  I graduated from Northeastern 
                    University in January 2020.  Previously I've worked as an Embedded Software Engineer
                    while on Co-op at Draeger from September 2018 to April 2019. I enjoy working on DIY
                    projects and plan to use this website to keep track of my projects while also providing
                    resources for anyone working on something similar.  
                </p>
                <p>
                        This website is a single page web app made with React. Due to the file size limit of github, all images are being hosted on google drive which
                    slows page load times.
                </p>
            </div>

            <h2>
                Latest Video:
            </h2>
            <div id="latest-video" load="copytable()">
                <iframe title="Youtube Video" src="https://www.youtube.com/embed?listType=user_uploads&list=TheMightyGir" frameBorder="0" allowFullScreen></iframe>
            </div>
        </div>
        
    );
  }
}
 
export default Home;