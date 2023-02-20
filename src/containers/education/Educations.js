import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { Fade } from "react-reveal";

class Educations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
            {/* <h1 className="educations-header" style={{ color: theme.text }}>
              Degrees Received
            </h1> */}
          </Fade>
        </div>
      </div>
    );
  }
}

export default Educations;
