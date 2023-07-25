/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class DisplayEducation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { educations } = this.props

        return(
            
            <>
                {educations.map(education => {
                    return <div className="education" id={education.id} key={education.id}>
                        <div className="university" > {education.university }</div>
                        <div className="degree" > {education.degree }</div>
                        <div className="start-date" > {education.startDate }</div>
                        <div className="end" > {education.endDate }</div>
                        <div className="city" > {education.city }</div>
                        <div className="country" > {education.country }</div>
                    </div>

                })}

            </>
        )
    }
}

export default DisplayEducation;