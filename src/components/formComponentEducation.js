/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import uniqid from 'uniqid'

class Education extends Component {
    constructor(props) {
        super(props)

        this.state = {
            education: {
                university: 'University of Lagos',
                degree: 'Software Engineering',
                startDate: "2023-07-10",
                completionDate: "2023-07-10",
                id: uniqid()
            },
            educationArr: []

        }

        this.handleChange = this.handleChange.bind(this)
        this.addEducation = this.addEducation.bind(this)
        this.deleteEducation = this.deleteEducation.bind(this)

    }

    handleChange(e) {
        const { name, value } = e.target

        this.setState( prevState => ({
            education: {
                ...prevState.education,
                [name]: value,

            }
            
        }))
    }

    addEducation(e) {
        e.preventDefault()

        console.log('this')
        let newEducation = {
            university: 'University of Lagos',
            degree: 'Software Engineering',
            startDate: "2023-07-10",
            completionDate: "2023-07-10",
            id: uniqid()
        }

        this.setState({
            educationArr: this.state.educationArr.concat(newEducation)
        })
    }

    deleteEducation(e) {
        e.preventDefault()
        console.log(e.target)

        this.setState({
            educationArr: this.state.educationArr.slice(0, -1)
        })
    }


    render() {
        const { education } = this.state
        const { formTitle } = this.props

        return(
            <div className="form-container">
                <div className="form-title">{ formTitle }</div>

                <form>
                    <input type="text" placeholder="UUniversity/College" name="university" id="uniInput" onChange={ this.handleChange } value={ education.university }></input>
                    <input type="text" placeholder="Role" name="degree" id="degreeInput" onChange={ this.handleChange } value={ education.degree }></input>
                    <label htmlFor="startDateInput">Start Date</label>
                    <input type="date" placeholder="Start Date" name="startDate" id="startDateInput" onChange={ this.handleChange } value={ education.startDate }></input>
                    <label htmlFor="completionDateInput">completion Date</label>
                    <input type="date" placeholder="Completion Date" name="completionDate" id="completionDateInput" onChange={ this.handleChange } value={ education.completionDate }></input>
                </form>

                <div className="form-btns">
                    <button className="delete-btn" id="del-btn" onClick={ this.deleteEducation } >delete</button>
                    <button className="add-new-btn" id="add-btn" onClick={ this.addEducation } >add new Education</button>
                </div>

            </div>
        )
    }
}

export default Education;