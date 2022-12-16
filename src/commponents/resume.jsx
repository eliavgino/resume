import React, { Component } from "react";
import jsPDF from "jspdf";

class Resume extends Component {
  state = {};
  render() {
    const {
      contactArr,
      skillsArr,
      educationArr,
      workArr,
      aboutme,
      links,
      asidecolor,
      checkcoloraside,
      checkfont,
      checkfontfamily,
      font,
      fontfamliy,
    } = this.props;
    return (
      <React.Fragment>
        <div className="resume-page">
          <div
            className="resume"
            id="pdfresume"
            style={{
              fontStyle: font,
              top: "30%",
              fontFamily: fontfamliy,
            }}
          >
            <div className="aboutme" style={{ backgroundColor: asidecolor }}>
              <h4>about me:</h4>
              {aboutme}
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------------------------ */}

            <div className="links" style={{ backgroundColor: asidecolor }}>
              <ol className="list-group-numbered ">
                <h3>links</h3>
                {links.map((val) => (
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{val.social}</div>
                      {val.link}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------------------------ */}
            <div className="contact1 border-bottom">
              {contactArr.map((val) => (
                <ul>
                  <h1>{val.firstname}</h1>
                  <h1>{val.lastname}</h1>
                </ul>
              ))}
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------------------------ */}
            <div className="contact2 border-bottom">
              {contactArr.map((val) => (
                <ul>
                  <il>
                    <p>
                      <i className="bi bi-envelope-at-fill"></i>
                      {val.mail}
                    </p>
                  </il>
                  <il>
                    <p>
                      {val.phone}
                      <i className="bi bi-telephone-inbound-fill"></i>{" "}
                    </p>
                  </il>
                </ul>
              ))}
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------------------------ */}
            <div className="education border-bottom">
              <h3>Education</h3>
              <ol className="list-group-numbered educationcon">
                {educationArr.map((val) => (
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        {val.startdate} to {val.enddate}
                      </div>
                      {val.occupation}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            {/* ------------------------------------------------------------------------------------------------------- */}
            <div className="skills border-bottom">
              <h3>Skills</h3>
              <ol className="list-group-numbered hstack skillscon">
                {skillsArr.map((val) => (
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">{val.skill}</div>
                  </li>
                ))}
              </ol>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------------------------ */}
            <div className="work border-bottom">
              <h3>Work Expirience</h3>
              <ol className="list-group-numbered workcon">
                {workArr.map((val) => (
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        {val.startdate} to {val.enddate}
                      </div>
                      {val.work}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div style={{ position: "absolute", top: "80px", left: 0 }}>
            <div
              class="btn-group-vertical"
              role="group"
              aria-label="Vertical button group"
            >
              <button disabled className="btn btn-light">
                color:
              </button>
              <button
                onClick={() => checkcoloraside("gray")}
                className="btn btn-dark"
              >
                gray
              </button>
              <button
                onClick={() => checkcoloraside("blue")}
                className="btn btn-dark"
              >
                blue
              </button>
              <button
                onClick={() => checkcoloraside("red")}
                className="btn btn-dark"
              >
                red
              </button>
              <button
                onClick={() => checkcoloraside("white")}
                className="btn btn-dark"
              >
                white
              </button>
              <button
                onClick={() => checkcoloraside("bisque")}
                className="btn btn-dark"
              >
                bisque
              </button>
              <button disabled className="btn btn-light">
                style:
              </button>
              <button
                onClick={() => checkfont("italic")}
                className="btn btn-dark"
              >
                italic
              </button>
              <button
                onClick={() => checkfont("normal")}
                className="btn btn-dark"
              >
                normal
              </button>
              <button disabled className="btn btn-light">
                family
              </button>
              <button
                onClick={() => checkfontfamily("normal")}
                className="btn btn-dark"
              >
                normal
              </button>
              <button
                onClick={() => checkfontfamily("cursive")}
                className="btn btn-dark"
              >
                cursive
              </button>
              <button
                onClick={() => checkfontfamily("fantasy")}
                className="btn btn-dark"
              >
                fantasy
              </button>
              <button
                onClick={() => checkfontfamily("inherit")}
                className="btn btn-dark"
              >
                inherit
              </button>
              <button
                onClick={() => checkfontfamily("revert")}
                className="btn btn-dark"
              >
                revert
              </button>
              <button
                onClick={() => checkfontfamily("-webkit-body")}
                className="btn btn-dark"
              >
                -webkit-body
              </button>
              <button onClick={this.download} className="btn btn-success">
                convert pdf
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  download() {
    const doc = new jsPDF("p", "px", [1100, 750]);
    doc.html(document.querySelector("#pdfresume"), {
      callback: function (pdf) {
        const pagecount = doc.internal.getNumberOfPages();
        pdf.deletePage(pagecount);

        pdf.save("myresume.pdf");
      },
    });
  }
  changeasidecolor() {}
}

export default Resume;
