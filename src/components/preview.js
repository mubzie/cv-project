/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Preview extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { personal, educationArr, workExperienceArr } = this.props;

        return(
            <div>

                <div className="container-personal">
                    <div className="personal-details"> {personal.fullName} </div>
                    <div className="personal-details"> {personal.occupation} </div>
                    <div className="personal-details"> {personal.phone} </div>
                    <div className="personal-details"> {personal.email} </div>
                    <div className="personal-details"> {personal.address} </div>
                    <div className="personal-details"> {personal.profile} </div>
                    
                </div>
                
                <div className="container-education">
                    {educationArr.map(education => {
                        return <div className="education" id={education.id} key={education.id}>
                            <div className="university" > {education.university }</div>
                            <div className="degree" > {education.degree }</div>
                            <div className="start-date" > {education.startDate }</div>
                            <div className="end" > {education.endDate }</div>
                            <div className="city" > {education.city }</div>
                            <div className="country" > {education.country }</div>
                        </div>

                    })

                    }
                </div>

                <div className="container-work-experience">
                    {workExperienceArr.map(workExperience => {
                        return <div className="work-experience" id={workExperience.id} key={workExperience.id}>
                            <div className="company" > {workExperience.company }</div>
                            <div className="role" > {workExperience.role }</div>
                            <div className="start-date" > {workExperience.startDate }</div>
                            <div className="end" > {workExperience.endDate }</div>
                            <div className="city" > {workExperience.city }</div>
                            <div className="country" > {workExperience.country }</div>
                        </div>

                    })

                    }
                </div>

            </div>
        )
    }
}

export default Preview;