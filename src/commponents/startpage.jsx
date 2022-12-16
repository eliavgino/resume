import React, { Component } from "react";
import "./resume.css";
import example from "../picturs/example.webp";
import auto from "../picturs/auto.png";
import bilder from "../picturs/bilder.png";
import design from "../picturs/design-icon.png";
import main from "../picturs/main.png";
import sharing from "../picturs/sharing.webp";
import { NavLink } from "react-router-dom";

import "../commponents/resume.css";
class Startpage extends Component {
  render() {
    return (
      <div className="bodypage">
        <div className="startpage-table">
          <div
            className="card-startPage text-center row"
            style={{ width: "100%" }}
          >
            <div className="card-header">
              <p>Do your own resume</p>
            </div>
            <div className="card-body" style={{ width: "100%" }}>
              <p className="card-title" style={{ width: "100%" }}>
                Special resume maker
              </p>
              <p className="card-text" style={{ width: "100%" }}>
                and all this for free just enter your deatails
              </p>
              <NavLink to={"/name"}>
                <button className="btn btn-outline-light w-25 h-10">
                  <p>start now</p>
                </button>
              </NavLink>
            </div>
          </div>
          <div className="imagediv text-center" style={{ width: "100%" }}>
            <img
              src={main}
              class="img-fluid"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="theeazy">
            <div
              class="card top-50 start-50 translate-middle"
              style={{ backgroundColor: "rgba(240, 248, 255, 0)" }}
            >
              <div class="card-body">
                <h1 class="card-title">
                  <i class="bi bi-pen-fill"></i>Easy online resume builder
                </h1>
                <p2 class="card-text">
                  Create an awesome resume, cover letter or online profile
                  without leaving your web browser.
                </p2>
                <img src={bilder} style={{ width: "15%" }}></img>
              </div>
            </div>
          </div>
          <div className="automatic">
            {" "}
            <div
              class="card top-50 start-50 translate-middle"
              style={{ backgroundColor: "rgba(240, 248, 255, 0)" }}
            >
              <div class="card-body">
                <h1 class="card-title">
                  <i class="bi bi-brush-fill"></i> Automatic resume
                </h1>
                <p2 class="card-text">
                  Create a powerful resume profile with all the things you need
                  and all of this for free!
                </p2>
                <img src={auto} style={{ width: "15%" }}></img>
              </div>
            </div>
          </div>
          <div className="simple">
            <div
              class="card top-50 start-50 translate-middle"
              style={{ backgroundColor: "rgba(240, 248, 255, 0)" }}
            >
              <div class="card-body">
                <h1 class="card-title">
                  <i class="bi bi-share-fill"></i>Easer for sending
                </h1>
                <p2 class="card-text">
                  the worl dont print any or in our website you can dawlond it
                  to pdf and send it to any one
                </p2>
                <img src={sharing} style={{ width: "15%" }}></img>
              </div>
            </div>
          </div>
          <div className="optionforevery">
            <div
              class="card top-50 start-50 translate-middle"
              style={{ backgroundColor: "rgba(240, 248, 255, 0)" }}
            >
              <div class="card-body">
                <h3 class="card-title">
                  <i class="bi bi-border-style"></i> multi tips of font style
                  and and resume color
                </h3>
                <p2 class="card-text">
                  Save your perfect resume in any any style the you want
                </p2>
                <img src={design} style={{ width: "20%" }}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Startpage;
