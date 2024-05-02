import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class ExperienceDetailsModal extends Component {
  render() {
    let title = "", company = "", years = "", description = "", achievements = [];

    if (this.props.data) {
      ({ title, company, years, description, achievements } = this.props.data);
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
            <h3 style={{ padding: "5px 5px 0 5px" }}>{title} at {company}</h3>
            <p className="modal-description">{years}</p>
            <p className="modal-description">{description}</p>
            {achievements && <div className="col-md-12 text-center">
              <h5>Highlights:</h5>
              <ul>
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>}
          </div>
        </div>
      </Modal>
    );
  }
}

export default ExperienceDetailsModal;
