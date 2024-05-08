import React from 'react';
import { Modal } from 'react-bootstrap';

const EducationDetailsModal = ({ data, show, onHide }) => {
  const {
    title,
    company,
    years,
    description,
    mainTech,
    technologies,
    logo_url,
    gpa,
    gpaMax,
    relevantCourses,
    highlights,
  } = data || {};

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="experience-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="experience-details">
          <img src={logo_url} alt={company} className="company-logo" height='50px' width="50"/>
          <div className="info-section">
            <p className="experience-company">{company}</p>
            <p className="experience-duration">{years}</p>
            {/* <div className="tech-stack">
              <span className="main-tech">Main Tech: {mainTech.join(', ')}</span>
              <span>Technologies: {technologies.join(', ')}</span>
            </div> */}
            {gpa && gpaMax && (
              <div className="gpa">
                <span>GPA: {gpa} / {gpaMax}</span>
              </div>
            )}
          </div>
        </div>
        <div className="description-section">
          <p>{description}</p>
        </div>
        {relevantCourses && (
          <div className="relevant-courses">
            <h5>Relevant Courses:</h5>
            <ul>
              {relevantCourses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        )}
        {highlights && (
          <div className="highlights-section">
            <h5>Highlights:</h5>
            <ul>
              {highlights.map((highlight, index) => (
                <li key={index}>
                  <span className="highlight-date">{highlight.date}:</span> {highlight.description}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default EducationDetailsModal;
