/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class WorkExperience extends Component {
    constructor(props) {
        super(props)

       this.state = {
            workExperience: {
                company: 'Google',
                role: 'Software Engineer',
                startDate: "2023-07-10",
                endDate: "2023-07-10",
            },

        }

        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(e) {
        const { name, value } = e.target

        this.setState( prevState => ({
            workExperience: {
                ...prevState.workExperience,
                [name]: value,

            }
            
        }))
    }


    render() {
        const { formTitle, workExperience } = this.state;
        
        return(
            <div className="form-container">
                <div className="form-title">{ formTitle }</div>

                <form>
                    <input type="text" placeholder="Company" name="company" id="nameInput" onChange={ this.handleChange } value={ workExperience.company }></input>
                    <input type="text" placeholder="Role" name="role" id="occupationInput" onChange={ this.handleChange } value={ workExperience.role }></input>
                    <label htmlFor="startDateInput">Start Date</label>
                    <input type="date" placeholder="Start Date" name="startDate" id="startDateInput" onChange={ this.handleChange } value={ workExperience.startDate }></input>
                    <label htmlFor="endDateInput">End Date</label>
                    <input type="date" placeholder="End Date" name="endDate" id="endDateInput" onChange={ this.handleChange } value={ workExperience.endDate }></input>
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