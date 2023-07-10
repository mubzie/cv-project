/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props)

        this.state  = {
            university: 'University of Lagos',
            degree: 'Software Engineering',
            startDate: "2023-07-10",
            completionDate: "2023-07-10",
        }

        this.handleUniversity = this.handleUniversity.bind(this)
        this.handleDegree = this.handleDegree.bind(this)
        this.handleStartDate = this.handleStartDate.bind(this)
        this.handleCompletionDate = this.handleCompletionDate.bind(this)

    }

    handleUniversity(e) {
        this.setState({
            university: e.target.value
        })
    }

    handleDegree(e) {
        this.setState({
            degree: e.target.value
        })
    }

    handleStartDate(e) {
        this.setState({
            startDate: e.target.value
        })
    }

    handleCompletionDate(e) {
        this.setState({
            completionDate: e.target.value
        })
    }

    render() {
        const { formTitle } = this.props

        return(
            <div className="form-container">
                <div className="form-title">{ formTitle }</div>

                <form>
                    <input type="text" placeholder="UUniversity/College" id="uniInput" onChange={this.handleUniversity} value={this.state.university}></input>
                    <input type="text" placeholder="Role" id="degreeInput" onChange={this.handleDegree} value={this.state.degree}></input>
                    <label htmlFor="startDateInput">Start Date</label>
                    <input type="date" placeholder="Start Date" id="startDateInput" onChange={this.handleStartDate} value={this.state.startDate}></input>
                    <label htmlFor="completionDateInput">completion Date</label>
                    <input type="date" placeholder="Completion Date" id="completionDateInput" onChange={this.handleCompletionDate} value={this.state.completionDate}></input>
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