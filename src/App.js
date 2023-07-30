/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Navbar from './components/navbar';
import PersonalDetails from './components/formComponentPersonal';
import WorkExperience from './components/formComponentWorkExp';
import Education from './components/formComponentEducation';
import Preview from './components/preview';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        fullName: 'Mubarak Rabiu',
        occupation: 'Software Engineer',
        phone: '+2348154356599',
        email: 'rabiumubarak92@gmail.com',
        address: 'Lagos Nigeria',
        profile:
          'I am a software Engineer working for google in their HQ. This is an opportunity for me to showcase my skills and expertise in react',
      },

      activeIndex: 0,

      workExperienceArr: [],

      educationArr: [],
    };

    this.addWorkExperience = this.addWorkExperience.bind(this);
    this.deleteWorkExperience = this.deleteWorkExperience.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitButton = this.onSubmitButton.bind(this);
    this.onClearButton = this.onClearButton.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      personal: {
        ...prevState.personal,
        [name]: value,
      },
    }));
  }

  onSubmitButton(e) {
    e.preventDefault();
  }

  onClearButton() {
    this.setState({
      personal: {
        fullName: '',
        occupation: '',
        phone: '',
        email: '',
        address: '',
        profile: '',
      },
    });
  }

  addWorkExperience(obj) {
    this.setState({
      workExperienceArr: this.state.workExperienceArr.concat(obj),
    });
  }

  deleteWorkExperience(i, count) {
    this.setState({
      workExperienceArr: this.state.workExperienceArr.slice(i, count),
    });
  }

  addEducation(obj) {
    this.setState({
      educationArr: this.state.educationArr.concat(obj),
    });
  }

  deleteEducation(i, count) {
    this.setState({
      educationArr: this.state.educationArr.slice(i, count),
    });
  }

  render() {
    const { personal, educationArr, workExperienceArr, activeIndex } = this.state;

    return (
      <>
        <div className="header">
          <Navbar title="CV - Kreator" />
        </div>

        <div className="main">
          <div className="form-container">
            <PersonalDetails
              formTitle="Personal Details"
              personal={personal}
              handleChange={this.handleChange}
              saveButton={this.onSubmitButton}
              clearButton={this.onClearButton}
              // isActive={ activeIndex === 0}
              // onShow={ () => this.setState({ activeIndex: 1})}
            />
            <WorkExperience
              formTitle="Work Experience"
              addWorkExperience={this.addWorkExperience}
              deleteWorkExperience={this.deleteWorkExperience}
              // isActive={ activeIndex === 0}
              // onShow={ () => this.setState({ activeIndex: 1})}
            />
            <Education
              formTitle="Education"
              addEducation={this.addEducation}
              deleteEducation={this.deleteEducation}
              // isActive={ activeIndex === 1}
              // onShow={ () => this.setState({ activeIndex: 1})}
            />
          </div>

          <div className="preview">
            <Preview
              personal={personal}
              workExperienceArr={workExperienceArr}
              educationArr={educationArr}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
