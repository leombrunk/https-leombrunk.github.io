import React, { Component } from "react";
 
class Resume extends Component {
  render() {
    return (
      <div>
            <div id="download-resume">
                <a href="KenLeombrunoResume.pdf" download> Download PDF </a>
            </div>
            <div id="resume-pdf">
                <iframe src="KenLeombrunoResume.pdf" title="Resume" frameBorder="0" />
            </div>
      </div>
    );
  }
}
 
export default Resume;