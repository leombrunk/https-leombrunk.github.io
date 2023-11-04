import React, { Component } from "react";
import pdf from "./resources/KenLeombrunoSoftwareEngineerResume2023.pdf";

class Resume extends Component {
    render() {
        return (
            <div>
                <div id="download-resume">
                    <a href={pdf} download> Download PDF </a>
                </div>
                <div id="resume-pdf">
                    <iframe src={pdf} title="Resume" frameborder="0" ></iframe>
                </div>
            </div>
        );
    }
}
 
export default Resume;