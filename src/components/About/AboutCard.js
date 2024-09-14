import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nidhi Dewangan </span>
            from <span className="purple"> Bilaspur, Chattisgarh, India.</span>
            <br />
            I am currently employed as a software developer at Xerus Systems.
            <br />
            I have completed B.tech in computer Science from Chouksey Engineering College and PG-Diploma in Advance computing from CDAC-Bangalore
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "What is passed by dosen't matter , What is Next is."{" "}
          </p>
          <footer className="blockquote-footer">Nidhi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
