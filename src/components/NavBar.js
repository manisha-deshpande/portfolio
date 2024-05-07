import React, { Component } from 'react';
import '../scss/MenuBar.scss';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredSection: null,
      isComponentMounted: false,
    };
  }

  componentDidMount() {
    this.setState({ isComponentMounted: true });
  }

  handleHover = (section) => {
    this.setState({ hoveredSection: section });
  };

  handleLeave = () => {
    this.setState({ hoveredSection: null });
  };

  scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    const { sections } = this.props;
    const { hoveredSection, isComponentMounted } = this.state;

    return (
      <div className={`navbar ${isComponentMounted ? 'mounted' : ''}`}>
        {sections.map((section) => (
          <div
            key={section.id}
            className={`navbar-icon ${hoveredSection === section ? 'hovered' : ''}`}
            onMouseEnter={() => this.handleHover(section)}
            onMouseLeave={this.handleLeave}
            onClick={() => this.scrollToSection(section.id)}
          >
            <i className={`fas fa-${section.icon}`} />
            {hoveredSection === section && <span className="hover-text">{section.name}</span>}
          </div>
        ))}
      </div>
    );
  }
}

export default NavBar;
