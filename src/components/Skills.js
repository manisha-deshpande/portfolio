import React, { Component } from "react";

class Skills extends Component {
  renderSkillSection(skillCategory, skills) {
    return (
      <div>
        <h2 className="text-white">{skillCategory}</h2>
        <ul className="list-inline mx-auto skill-icon">
          {skills.map((skill, i) => (
            <li className="list-inline-item mx-3" key={i}>
              <span>
                <div className="text-center skills-tile">
                  <i className={skill.class} style={{ fontSize: "220%" }}>
                    <p className="text-center" style={{ fontSize: "30%", marginTop: "4px" }}>
                      {skill.name}
                    </p>
                  </i>
                </div>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    let content = [];
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      for (let category in this.props.sharedSkills.icons) {
        let skills = this.props.sharedSkills.icons[category];
        content.push(this.renderSkillSection(category, skills));
      }
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-white">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            {content}
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;