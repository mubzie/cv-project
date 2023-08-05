/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import uniqid from "uniqid";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronDown } from "react-icons/hi";
import { HiOutlinePencilAlt } from "react-icons/hi";
// import DisplayEducation from "./displayEducation";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: {
        university: "University of Lagos",
        degree: "Computer Science",
        startDate: "02/2018",
        completionDate: "02/2022",
        id: uniqid(),
        city: "Lagos",
        country: "Nigeria",
        profile:
          "I volunteered on different SDG's programs during my time in the university",
      },

      dropDown: false,

      showForm: false,

      displayForm: false,

      educations: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitEducation = this.onSubmitEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
    this.onClearButton = this.onClearButton.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.displayForm = this.displayForm.bind(this);
  }

  toggleDropDown() {
    this.setState({
      dropDown: !this.state.dropDown,
      showForm: !this.state.showForm,
      displayForm: false,
    });
  }

  // toggleForm() {
  //   this.setState({ showForm: !this.state.showForm });
  // }

  displayForm() {
    this.setState({
      displayForm: true,
      showForm: false,
      dropDown: !this.state.dropDown,
    });
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      education: {
        ...prevState.education,
        [name]: value,
      },
    }));
  }

  onSubmitEducation(e) {
    e.preventDefault();

    this.setState({
      educations: this.state.educations.concat(this.state.education),
      education: {
        university: "University of Lagos",
        degree: "Computer Science",
        startDate: "02/2018",
        completionDate: "02/2022",
        id: uniqid(),
        city: "Lagos",
        country: "Nigeria",
        profile:
          "I volunteered on different SDG's programs during my time in the university",
      },
    });

    this.props.addEducation(this.state.education);

    this.setState({
      dropDown: !this.state.dropDown,
      showForm: !this.state.showForm,
      displayForm: false,
    });
  }

  onClearButton() {
    this.setState({
      education: {
        university: "",
        degree: "",
        startDate: "",
        completionDate: "",
        city: "",
        country: "",
        id: uniqid(),
      },
    });
  }

  deleteEducation(e) {
    e.preventDefault();
    console.log(this.state.education.id);

    this.setState({
      educations: this.state.educations.slice(0, -1),
    });

    this.props.deleteEducation(0, -1);
  }

  render() {
    const { education, dropDown, showForm, displayForm, educations } =
      this.state;
    const { formTitle } = this.props;

    return (
      <div className="form-container-education">
        <div className="form-header-container" onClick={this.toggleDropDown}>
          <div className="form-title">{formTitle}</div>
          <div className="icon">
            {dropDown ? <HiOutlineChevronDown /> : <HiOutlineChevronRight />}
          </div>
        </div>

        {showForm && (
          <>
            {this.state.educations.length === 0 ? (
              <div className="work-exp-list">
                <div className="work-exp-info">
                  You haven't added any education
                </div>
                <button className="add-new-button" onClick={this.displayForm}>
                  Add education
                </button>
              </div>
            ) : (
              <>
                {educations.map((education) => {
                  return (
                    <>
                      <div className="work-exp-arr" key={education.id}>
                        <div className="co-ro-list">
                          <div className="company-arr">
                            {education.university}
                          </div>
                          <div className="role-arr">{education.degree}</div>
                        </div>
                        <div className="edit-btn">
                          {" "}
                          <HiOutlinePencilAlt />{" "}
                        </div>
                      </div>
                    </>
                  );
                })}
                <button className="add-new-button" onClick={this.displayForm}>
                  {" "}
                  Add new education{" "}
                </button>
              </>
            )}
          </>
        )}

        {displayForm && (
          <>
            <form onSubmit={this.onSubmitEducation}>
              <input
                type="text"
                placeholder="University/College"
                name="university"
                id="uniInput"
                onChange={this.handleChange}
                value={education.university}
              ></input>
              <input
                type="text"
                placeholder="Degree"
                name="degree"
                id="degreeInput"
                onChange={this.handleChange}
                value={education.degree}
              ></input>

              <div className="info-container">
                <div className="info-title">
                  <label htmlFor="startDateInput">start date</label>
                  <input
                    type="text"
                    placeholder="20/07/2018"
                    name="startDate"
                    id="startDateInput"
                    onChange={this.handleChange}
                    value={education.startDate}
                  ></input>
                </div>
                <div className="info-title">
                  <label htmlFor="completionDateInput">completion date</label>
                  <input
                    type="text"
                    placeholder="20/07/2020"
                    name="completionDate"
                    id="completionDateInput"
                    onChange={this.handleChange}
                    value={education.completionDate}
                  ></input>
                </div>
              </div>

              <div className="info-container">
                <div className="info-title">
                  <label htmlFor="startDateInput">city</label>
                  <input
                    type="text"
                    placeholder="Lagos"
                    name="city"
                    id="ciyuInput"
                    onChange={this.handleChange}
                    value={education.city}
                  ></input>
                </div>
                <div className="info-title">
                  <label htmlFor="completionDateInput">country</label>
                  <input
                    type="text"
                    placeholder="Nigeria"
                    name="country"
                    id="countryInput"
                    onChange={this.handleChange}
                    value={education.country}
                  ></input>
                </div>
              </div>

              <textarea
                rows="3"
                cols="30"
                placeholder="things like relevant courses or extra-curricular activities"
                name="profile"
                id="profileInput"
                onChange={this.handleChange}
                value={education.profile}
              ></textarea>
            </form>

            <div className="form-btns">
              <div className="btn-title">
                <button
                  className="delete-btn"
                  id="del-button"
                  onClick={this.deleteEducation}
                >
                  Delete
                </button>
                <button
                  className="clear-btn"
                  id="clear-button"
                  onClick={this.onClearButton}
                >
                  Cancel
                </button>
              </div>

              <button
                className="save-btn"
                id="save-button"
                onClick={this.onSubmitEducation}
              >
                Save
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Education;
