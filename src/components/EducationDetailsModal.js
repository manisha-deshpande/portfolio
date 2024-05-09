import React, { Component } from "react";
import { Modal, Container, Row, Col, Badge } from "react-bootstrap";

class ExperienceDetailsModal extends Component {
  render() {
    let title = "",
      company = "",
      years = "",
      location = "",
      description = "",
      highlights = [],
      logo_url = "",
      mainTech = [],
      technologies = [],
      gpa = "",
      gpaMax = "",
      relevantCourses = [];

    if (this.props.data) {
      ({
        title,
        company,
        years,
        location,
        description,
        highlights,
        logo_url,
        mainTech,
        technologies,
        gpa,
        gpaMax,
        relevantCourses
      } = this.props.data);
    }

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <Modal.Header closeButton style={{ borderBottom: "none", padding: "35px 25px 0px 25px"}}>
          <Container fluid>
            <Row>
              <Col xs={2}>
                <img
                  src={logo_url}
                  alt={company}
                  className="company-logo rounded-circle"
                  height="75"
                  width="75"
                />
              </Col>
              <Col xs={7}>
                <h3 className="text-left">{title}</h3>
                <h4 className="text-left">{company}</h4>
                <Badge pill className="experience-badge me-2 mb-2" style={{marginTop: "5px"}}>
                    GPA: {gpa}/{gpaMax}
                </Badge>
              </Col>
              <Col xs={3}>
                <p className="text-right">{years}</p>
                <p className="text-right">{location}</p>
                
              </Col>
            </Row>
          </Container>
        </Modal.Header>
        <Modal.Body style={{ paddingBottom: "30px"}}>
          <Container fluid>
          
            <Row>
              <Col>
                <p className="modal-description">{description}</p>
              </Col>
            </Row>
            {relevantCourses && relevantCourses.length > 0 && (
             <Row>
              <Col>
                <h5>Relevant Courses</h5>
                <div className="tech-list">
                  {relevantCourses && relevantCourses.map((tech, index) => (
                    <Badge pill key={index} className="experience-badge mr-2 mb-2">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Col>
            </Row>
            )}
            {highlights && highlights.length > 0 && (
              <Row>
                <Col>
                  <h5>Highlights</h5>
                  <ul className="list-unstyled">
                    {highlights.map((highlight, index) => (
                      <li key={index} className="d-flex align-items-center">
                        <Badge pill className="experience-badge me-2 mb-2">
                          {highlight.date}
                        </Badge>
                        <span className="modal-description">{highlight.description}</span>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            )}
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}

export default ExperienceDetailsModal;
