/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import uniqid from "uniqid";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronDown } from "react-icons/hi";
import { HiOutlinePencilAlt } from "react-icons/hi";
// import DisplayWorkExp from "./displayWorkExp";

class WorkExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workExperience: {
        company: "Google",
        role: "Software Engineer",
        startDate: "07/2022",
        endDate: "present",
        id: uniqid(),
        city: "Silicon Valley",
        country: "USA",
        profile:
          "I was the lead Engineer on the android project. Leading a team of 100 software engineers thought-out the entire project lifecylce",
      },

      dropDown: false,

      showForm: false,

      displayForm: false,

      workExperiences: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitExperience = this.onSubmitExperience.bind(this);
    this.deleteWorkExperience = this.deleteWorkExperience.bind(this);
    this.onClearButton = this.onClearButton.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    // this.toggleForm = this.toggleForm.bind(this);
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
      workExperience: {
        ...prevState.workExperience,
        [name]: value,
      },
    }));
  }

  onSubmitExperience(e) {
    e.preventDefault();

    this.setState({
      workExperiences: this.state.workExperiences.concat(
        this.state.workExperience
      ),
      workExperience: {
        company: "Google",
        role: "Software Engineer",
        startDate: "07/2022",
        endDate: "present",
        id: uniqid(),
        city: "Silicon Valley",
        country: "USA",
        profile:
          "I was the lead Engineer on the android project. Leading a team of 100 software engineers thought-out the entire project lifecylce",
      },
    });

    this.props.addWorkExperience(this.state.workExperience);

    this.setState({
      dropDown: !this.state.dropDown,
      showForm: !this.state.showForm,
      displayForm: false,
    });
  }

  onClearButton() {
    this.setState({
      workExperience: {
        company: "",
        role: "",
        startDate: "",
        endDate: "",
        id: uniqid(),
        city: "",
        country: "",
        profile: "",
      },
    });
  }

  deleteWorkExperience(e) {
    e.preventDefault();
    console.log(this.state.workExperience.id);

    this.setState({
      workExperiences: this.state.workExperiences.slice(0, -1),
    });

    this.props.deleteWorkExperience(0, -1);
  }

  render() {
    const { workExperience, dropDown, showForm, displayForm, workExperiences } =
      this.state;
    const { formTitle } = this.props;

    return (
      <div className="form-container-workexp">
        <div className="form-header-container" onClick={this.toggleDropDown}>
          <div className="form-title">{formTitle}</div>
          <div className="icon">
            {dropDown ? <HiOutlineChevronDown /> : <HiOutlineChevronRight />}
          </div>
        </div>

        {showForm && (
          <>
            {this.state.workExperiences.length === 0 ? (
              <div className="work-exp-list">
                <div className="work-exp-info">
                  You haven't add any work experience
                </div>
                <button className="add-new-button" onClick={this.displayForm}>
                  Add work experience
                </button>
              </div>
            ) : (
              <>
                {workExperiences.map((workExperience) => {
                  return (
                    <>
                      <div className="work-exp-arr" key={workExperience.id}>
                        <div className="co-ro-list">
                          <div className="company-arr">
                            {workExperience.company}
                          </div>
                          <div className="role-arr">{workExperience.role}</div>
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
                  Add work experience{" "}
                </button>
              </>
            )}
          </>
        )}

        {displayForm && (
          <>
            <form onSubmit={this.onSubmitExperience}>
              <input
                type="text"
                placeholder="Company"
                name="company"
                id="nameInput"
                onChange={this.handleChange}
                value={workExperience.company}
              ></input>
              <input
                type="text"
                placeholder="Role"
                name="role"
                id="occupationInput"
                onChange={this.handleChange}
                value={workExperience.role}
              ></input>

              <div className="info-container">
                <div className="info-title">
                  <label htmlFor="startDateInput">start Date</label>
                  <input
                    type="text"
                    placeholder="Start Date"
                    name="startDate"
                    id="startDateInput"
                    onChange={this.handleChange}
                    value={workExperience.startDate}
                  ></input>
                </div>
                <div className="info-title">
                  <label htmlFor="endDateInput">end Date</label>
                  <input
                    type="text"
                    placeholder="End Date"
                    name="endDate"
                    id="endDateInput"
                    onChange={this.handleChange}
                    value={workExperience.endDate}
                  ></input>
                </div>
              </div>

              <div className="info-container">
                <div className="info-title">
                  <label htmlFor="startDateInput">city</label>
                  <input
                    type="text"
                    placeholder="city"
                    name="city"
                    id="cityInput"
                    onChange={this.handleChange}
                    value={workExperience.city}
                  ></input>
                </div>
                <div className="info-title">
                  <label htmlFor="endDateInput">country</label>
                  <input
                    type="text"
                    placeholder="country"
                    name="country"
                    id="countryInput"
                    onChange={this.handleChange}
                    value={workExperience.country}
                  ></input>
                </div>
              </div>

              <textarea
                rows="3"
                cols="30"
                placeholder="write short description about your role in this company"
                name="profile"
                id="profileInput"
                onChange={this.handleChange}
                value={workExperience.profile}
              ></textarea>
            </form>

            <div className="form-btns">
              <div className="btn-title">
                <button
                  className="delete-btn"
                  onClick={this.deleteWorkExperience}
                >
                  Delete
                </button>
                <button className="clear-btn" onClick={this.onClearButton}>
                  Cancel
                </button>
              </div>

              <button className="save-btn" onClick={this.onSubmitExperience}>
                Save
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default WorkExperience;
