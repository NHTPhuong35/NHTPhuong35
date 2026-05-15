import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
          <p style={{ textAlign: "justify" }} className="about-body mb-0">
            Hi, I’m <span className="purple"> Nguyen Hoang Thanh Phuong </span>
            a final-year Information Technology student at Saigon University.
            <br />
            <br />I enjoy learning new technologies, solving real-world problems, and continuously improving my software development skills. I am currently seeking opportunities to gain practical experience, grow professionally, and contribute to meaningful projects in a collaborative environment.
          </p>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
