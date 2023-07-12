/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class WorkExperience extends Component {
    constructor(props) {
        super(props)

    }


    render() {
        const { formTitle, handleDataChange, data } = this.props
        
        return(
            <div className="form-container">
                <div className="form-title">{ formTitle }</div>

                <form>
                    <input type="text" placeholder="Company" id="nameInput" onChange={ handleDataChange } value={ data.company }></input>
                    <input type="text" placeholder="Role" id="occupationInput" onChange={ handleDataChange } value={ data.role }></input>
                    <label htmlFor="startDateInput">Start Date</label>
                    <input type="date" placeholder="Start Date" id="startDateInput" onChange={ handleDataChange } value={ data.startDate }></input>
                    <label htmlFor="endDateInput">End Date</label>
                    <input type="date" placeholder="End Date" id="endDateInput" onChange={ handleDataChange } value={ data.endDate }></input>
                </form>

                <div className="form-btns">
                    <button className="delete-btn">delete</button>
                    <button className="add-new-btn">add new Experience</button>
                </div>

            </div>
        )
    }
}

export default WorkExperience;