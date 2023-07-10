/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class WorkExperience extends Component {
    constructor(props) {
        super(props)

        this.state  = {
            company: 'Google',
            role: 'Software Engineer',
            startDate: "2023-07-10",
            endDate: "2023-07-10",
        }

        this.handleCompany = this.handleCompany.bind(this)
        this.handleRole = this.handleRole.bind(this)
        this.handleStartDate = this.handleStartDate.bind(this)
        this.handleEndDate = this.handleEndDate.bind(this)

    }

    handleCompany(e) {
        this.setState({
            company: e.target.value
        })
    }

    handleRole(e) {
        this.setState({
            role: e.target.value
        })
    }

    handleStartDate(e) {
        this.setState({
            startDate: e.target.value
        })
    }

    handleEndDate(e) {
        this.setState({
            endDate: e.target.value
        })
    }

    render() {
        const { formTitle } = this.props
        return(
            <div className="form-container">
                <div className="form-title">{ formTitle }</div>

                <form>
                    <input type="text" placeholder="Company" id="nameInput" onChange={this.handleCompany} value={this.state.company}></input>
                    <input type="text" placeholder="Role" id="occupationInput" onChange={this.handleRole} value={this.state.role}></input>
                    <label htmlFor="startDateInput">Start Date</label>
                    <input type="date" placeholder="Start Date" id="startDateInput" onChange={this.handleStartDate} value={this.state.startDate}></input>
                    <label htmlFor="endDateInput">End Date</label>
                    <input type="date" placeholder="End Date" id="endDateInput" onChange={this.handleEndDate} value={this.state.endDate}></input>
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