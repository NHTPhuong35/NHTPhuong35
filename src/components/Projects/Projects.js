import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import imShirtSales from "../../Assets/Projects/imgShirtSales.png";
import imBookStore from "../../Assets/Projects/imBookstore.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imShirtSales}
              isBlog={false}
              title="Shirt Sales Manager"
              description="A desktop application built with Java Swing and NetBeans for small-scale in-store sales management. Implements a three-layer architecture (DAO, BUS, GUI) with MySQL for efficient data storage. Features an intuitive UI for inventory tracking, sales recording, and revenue calculation."
              ghLink="https://github.com/NHTPhuong35/DOAN_JAVA.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imBookStore}
              isBlog={false}
              title="Bookstore Management System"
              description="A desktop application built with Java Swing and NetBeans for small-scale bookstore management. Implements a three-layer architecture (DAO, BUS, GUI) with MySQL for secure data storage. Features include inventory tracking, book searching, invoice management, and revenue calculation, designed for efficient sales and stock management."
              ghLink="https://github.com/NHTPhuong35/QL_BANSACH.git"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
