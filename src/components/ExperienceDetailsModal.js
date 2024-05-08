import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class ExperienceDetailsModal extends Component {
  render() {
    let title = "", company = "", years = "", description = "", highlights = [], logo_url="";

    if (this.props.data) {
      ({ title, company, years, description, highlights, logo_url } = this.props.data);
    }

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">
        <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
            <div className="experience-header">
              <img src={logo_url} alt={company} className="company-logo" height="50" width="50"/>
              <h3 className="experience-title">{title}</h3>
              <h4 className="experience-company">{company}</h4>
              <p className="experience-duration">{years}</p>
            </div>
            <div className="experience-description">
              <p>{description}</p>
            </div>
            {highlights && highlights.length > 0 && (
              <div className="experience-highlights">
                <h5>Highlights:</h5>
                <ul>
                  {highlights.map((highlight, index) => (
                    <li key={index}>
                      <span className="highlight-date">{highlight.date}:</span>{" "}
                      {highlight.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Modal>
    );
  }
}

export default ExperienceDetailsModal;
