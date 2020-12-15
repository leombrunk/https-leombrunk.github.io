import React, { Component } from "react";
 
class Resume extends Component {
  render() {
    return (
      <div>
            <div id="download-resume">
                <a href="../resources/KenLeombrunoResume.pdf" download> Download PDF </a>
            </div>
            <div id="resume-pdf">
                <iframe src="../resources/KenLeombrunoResume.pdf" title="Resume" frameBorder="0" />
            </div>
      </div>
    );
  }
}
 
export default Resume;