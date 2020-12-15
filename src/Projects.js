import React, { Component } from "react";
import {
  NavLink,
} from "react-router-dom";
 
class Projects extends Component {
  render() {
    return (
      <div>
        <table id="project-list">
          <tbody>
            <tr>
              <td>
                <NavLink to="/projects/selenium">
                Scraping Web Data With Python And Selenium
                </NavLink>
                <div className="project-summary">
                  <NavLink to="/projects/selenium">
                    <img src="https://drive.google.com/uc?id=1Io3xaBnHMBrnMB9p_Lik3HkRenjuRTAO" alt="selenium-thumbnail"  width="300" height="200" />
                  </NavLink>

                  <p>
                  Use selenium and python to answer real world problems.
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <NavLink to="/projects/website">
                Building A Static Website With Github
                </NavLink>
                <div className="project-summary">
                  <NavLink to="/projects/website">
                  <img src="https://drive.google.com/uc?id=1rxWNrfg_zzVIJfEjGOUMbGs47zcY9LRw" alt="web-thumbnail"  width="300" height="200" />
                  </NavLink>

                  <p>
                  Use Github pages to create your own website.
                  Learn some basics behind using Git as well as writing HTML and CSS.
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
 
export default Projects;