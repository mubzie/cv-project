/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { personal, workExperienceArr, educationArr } = this.props;

    return (
      <div>
        <div className="container-personal">
          <div className="child-container">
            <div className="name-role">
              <div className="personal-details name"> {personal.fullName} </div>
              <div className="personal-details occupation">
                {" "}
                {personal.occupation}{" "}
              </div>
            </div>

            <div className="address-contact">
              <div className="personal-details phone"> {personal.phone} </div>
              <div className="personal-details email"> {personal.email} </div>
              <div className="personal-details address">
                {" "}
                {personal.address}{" "}
              </div>
            </div>
          </div>

          <div className="personal-details profile"> {personal.profile} </div>
        </div>

        <hr></hr>

        <div className="container-work-experience">
          {workExperienceArr.map((workExperience) => {
            return (
              <div
                className="work-experience"
                id={workExperience.id}
                key={workExperience.id}
              >
                <div className="work-container">
                  <div className="company-role-container">
                    <div className="company"> {workExperience.company}</div>
                    <div className="role"> {workExperience.role}</div>
                  </div>
                  <div className="date-location-container">
                    <div className="date-container">
                      <div className="start-date">
                        {workExperience.startDate}
                      </div>
                      {" - "}
                      <div className="end"> {workExperience.endDate}</div>
                    </div>

                    <div className="date-container">
                      <div className="city">
                        {workExperience.city}
                        {","}
                      </div>
                      <div className="country"> {workExperience.country}</div>
                    </div>
                  </div>
                </div>
                <div className="profile"> {workExperience.profile}</div>
              </div>
            );
          })}
        </div>

        <div className="container-education">
          {educationArr.map((education) => {
            return (
              <div className="education" id={education.id} key={education.id}>
                <div className="university"> {education.university}</div>
                <div className="degree"> {education.degree}</div>
                <div className="start-date"> {education.startDate}</div>
                <div className="end"> {education.endDate}</div>
                <div className="city"> {education.city}</div>
                <div className="country"> {education.country}</div>
                <div className="profile"> {education.profile}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Preview;
