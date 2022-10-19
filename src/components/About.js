import React, { Component } from 'react'
import "../styles/About.css"
import FadeInSection from './FadeInSection';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: true,
            activeKey: "1"
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        });
    }
  render() {
      const one = (
        <p>I am currently studying 7th semester of CSIT based on <b>Orchid Int'l College.</b> My Major Subject is Full Stack Development</p>
      );

      const two = (
        <p>
          Outside of work, I'm interested in following the developments of
          stuffs. I also play a lot of video games.
        </p>
      );
      const three = (
        <p>
          <b>Want to chat?</b> Shoot me a message at{" "}
          <a href="mailto:binayamm@gmail.com">
            binayamm@gmail
          </a>{" "}
          and let's talk.
        </p>
      );
      const desc_items = [one, two, three];

      const tech_stack = [
        "Javascript ES6+",
        "Python",
        "React.js",
        "Java",
        "Laravel",
        "HTML & CSS"
      ];
  
      const tech_items = tech_stack.map(stack => <li>{stack}</li>);
  
    return (
        <div id="about">
            <FadeInSection>
                <div className="section-header">
                    <div className="section-title">/ about me</div>
                </div>
                <div className="about-content">
                    <div className="about-description">
                        {[one]}
                        {"Here are some technologies I'm working with"}
                        <ul className="tech-stack">
                            {tech_stack.map(function (tech_item, i) {
                            return (
                            <FadeInSection delay={`${i + 1}00ms`}>
                            <li>{tech_item}</li>
                            </FadeInSection>
                            );
                            })}
                        </ul>
                    {[two]}
                    {[three]}
                    </div>
                    <div className="about-image">
                        <img src="" alt="" srcset="" />
                    </div>
                </div>
            </FadeInSection>
        </div>
              
    );
  }
}
