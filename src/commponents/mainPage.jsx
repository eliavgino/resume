import React, { Component } from "react";
import ResumeApp from "./resumeApp";
import { BrowserRouter } from "react-router-dom";
import "../commponents/resume.css";

class MainPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="allthemainpage">
          <nav className="navbar  bg-dark">
            <div className="container-fluid">
              <h1>
                <a className="navbar-brand" href="/">
                  <i class="bi bi-house-door"></i>
                </a>
              </h1>
            </div>
          </nav>

          <BrowserRouter>
            <ResumeApp />
          </BrowserRouter>
        </div>
      </React.Fragment>
    );
  }
}

export default MainPage;
