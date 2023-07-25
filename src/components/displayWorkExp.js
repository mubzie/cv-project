/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class DisplayWorkExp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { workExperiences } = this.props

        return(
            
            <>
                {workExperiences.map( workExperience => {
                    return <div className="workExperience" id={workExperience.id} key={workExperience.id}>
                    <div className="company" > {workExperience.company }</div>
                    <div className="role" > {workExperience.role }</div>
                    <div className="start-date" > {workExperience.startDate }</div>
                    <div className="end-date" > {workExperience.endDate }</div>
                    <div className="city" > {workExperience.city }</div>
                    <div className="country" > {workExperience.country }</div>
                </div>
                })}

            </>
        )
    }
}

export default DisplayWorkExp;