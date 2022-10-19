import React, { Component } from "react";
import "../styles/Intro.css";
import Typist from "react-typist";
import FadeInSection from "./FadeInSection";

export default class Intro extends Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"binaya"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I SLEEP </div>
          <div className="intro-desc">
            I'm IT Student. I like to create Websites. And I enjoy listening to
            Podcasts and Reading Books. I like computer and stuffs. I like the
            new technology that comes in our daily life.
          </div>
          <a href="mailto:binayamm@gmail.com" className="intro-contact">
            {"SAY HI"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}
