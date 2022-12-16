import React, { Component } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Startpage from "./startpage";
import Skills from "./skills";
import Education from "./education";
import Work from "./work";
import Aboutme from "./aboutme";
import Links from "./links";
import Name from "./name";
import Resume from "./resume";
import { Formik } from "formik";

class ResumeApp extends Component {
  state = {
    contactArr: [],
    skillsArr: [],
    educationArr: [],
    workArr: [],
    aboutme: "",
    links: [],
    asidecolor: "rgb(191, 204, 213)",
    font: "normal",
    fontfamliy: "",
  };
  render() {
    return (
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Startpage />}></Route>
          <Route
            path="/Name"
            element={
              <Name
                contactArr={this.state.contactArr}
                submitContact={this.submitContact}
              />
            }
          ></Route>

          <Route
            path="/skills"
            element={
              <Skills
                skillsArr={this.state.skillsArr}
                submitskills={this.submitskills}
              />
            }
          ></Route>
          <Route
            path="/education"
            element={
              <Education
                CheckDate={this.CheckDate}
                submiteducation={this.submiteducation}
                educationArr={this.state.educationArr}
              />
            }
          ></Route>
          <Route
            path="/work"
            element={
              <Work workArr={this.state.workArr} submitwork={this.submitwork} />
            }
          ></Route>

          <Route
            path="/aboutme"
            element={
              <Aboutme
                submitAboutMe={this.submitAboutMe}
                aboutme={this.state.aboutme}
              />
            }
          ></Route>
          <Route
            path="/links"
            element={
              <Links submitLinks={this.submitLinks} links={this.state.links} />
            }
          ></Route>
          <Route
            path="/resume"
            element={
              <Resume
                asidecolor={this.state.asidecolor}
                contactArr={this.state.contactArr}
                skillsArr={this.state.skillsArr}
                educationArr={this.state.educationArr}
                workArr={this.state.workArr}
                aboutme={this.state.aboutme}
                links={this.state.links}
                checkcoloraside={this.checkcoloraside}
                checkfontfamily={this.checkfontfamily}
                fontfamily={this.state.fontfamliy}
                checkfont={this.checkfont}
                font={this.state.font}
              />
            }
          ></Route>
        </Routes>
      </React.Fragment>
    );
  }
  checkfont = (font) => {
    switch (font) {
      case "italic":
        this.setState({ font: "italic" });
        break;

      case "normal":
        {
          this.setState({ font: "normal" });
        }
        break;
    }
  };
  checkfontfamily = (fontfamily) => {
    switch (fontfamily) {
      case "cursive":
        this.setState({ fontfamliy: "cursive" });
        break;

      case "fantasy":
        {
          this.setState({ fontfamliy: "fantasy" });
        }
        break;
      case "inherit":
        {
          this.setState({ fontfamliy: "inherit" });
        }
        break;
      case "revert":
        {
          this.setState({ fontfamliy: "revert" });
        }
        break;
      case "-webkit-body": {
        this.setState({ fontfamliy: "-webkit-body" });
      }
    }
  };
  checkcoloraside = (color) => {
    switch (color) {
      case "gray":
        this.setState({ asidecolor: "rgb(191, 204, 213)" });
        break;

      case "bisque":
        {
          this.setState({ asidecolor: "bisque" });
        }
        break;
      case "white":
        {
          this.setState({ asidecolor: "white" });
        }
        break;
      case "red":
        {
          this.setState({ asidecolor: "rgb(173, 81, 81)" });
        }
        break;
      case "blue": {
        this.setState({ asidecolor: "rgb(126, 126, 233)" });
      }
    }
  };
  submitAboutMe = (event, Formik) => {
    event.preventDefault();
    console.log(Formik);
    const aboutme = Formik.aboutme;
    this.setState({ aboutme });
    event.target.reset();
  };
  submitLinks = (event, Formik) => {
    event.preventDefault();
    console.log(Formik);
    this.state.links.push({
      social: Formik.social,
      link: Formik.link,
    });
    event.target.reset();
  };
  submitskills = (event, Formik) => {
    event.preventDefault();
    console.log(Formik);
    this.state.skillsArr.push({
      skill: Formik.skill,
    });
    event.target.reset();
  };
  submitContact = (event, Formik) => {
    event.preventDefault();
    console.log(Formik);
    this.state.contactArr.push({
      firstname: Formik.firstname,
      lastname: Formik.lastname,
      mail: Formik.mail,
      phone: Formik.phone,
    });
    event.target.reset();
  };
  submitwork = (event, Formik) => {
    event.preventDefault();
    console.log(Formik);
    this.state.workArr.push({
      startdate: Formik.startdate,
      enddate: Formik.enddate,
      work: Formik.work,
    });
    event.target.reset();
  };
  submiteducation = (event, Formik) => {
    event.preventDefault();
    console.log(Formik);
    this.state.educationArr.push({
      startdate: Formik.startdate,
      enddate: Formik.enddate,
      occupation: Formik.occupation,
    });
    event.target.reset();
  };
}

export default ResumeApp;
