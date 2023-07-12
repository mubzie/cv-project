/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props)

    }


    render() {
        const { formTitle, handleDataChange, data } = this.props

        return(
            <div className="form-container">
                <div className="form-title">{ formTitle }</div>

                <form>
                    <input type="text" placeholder="UUniversity/College" id="uniInput" onChange={ handleDataChange } value={ data.university }></input>
                    <input type="text" placeholder="Role" id="degreeInput" onChange={ handleDataChange } value={ data.degree }></input>
                    <label htmlFor="startDateInput">Start Date</label>
                    <input type="date" placeholder="Start Date" id="startDateInput" onChange={ handleDataChange } value={ data.startDate }></input>
                    <label htmlFor="completionDateInput">completion Date</label>
                    <input type="date" placeholder="Completion Date" id="completionDateInput" onChange={ handleDataChange } value={ data.completionDate }></input>
                </form>

                <div className="form-btns">
                    <button className="delete-btn">delete</button>
                    <button className="add-new-btn">add new Education</button>
                </div>

            </div>
        )
    }
}

export default Education;