/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import uniqid from 'uniqid'
import DisplayEducation from "./displayEducation";

class Education extends Component {
    constructor(props) {
        super(props)

        this.state = {
            education: {
                university: 'University of Lagos',
                degree: 'Computer Science',
                startDate: '02/2018',
                completionDate: '02/2022',
                id: uniqid(),
                city: 'Lagos',
                country: 'Nigeria',
            },
            educations: []

        }

        this.handleChange = this.handleChange.bind(this)
        this.onSubmitEducation = this.onSubmitEducation.bind(this)
        this.deleteEducation = this.deleteEducation.bind(this)

    }

    handleChange(e) {
        const { name, value } = e.target

        this.setState( prevState => ({
            education: {
                ...prevState.education,
                [name]: value,

            },
            
        }))
    }

    onSubmitEducation(e) {
        e.preventDefault()

        this.setState({
            educations: this.state.educations.concat(this.state.education),
            education: {
                university: 'University of Lagos',
                degree: 'Computer Science',
                startDate: '02/2018',
                completionDate: '02/2022',
                id: uniqid(),
                city: 'Lagos',
                country: 'Nigeria',
            }
        })

        this.props.addEducation(this.state.education)

    }

    deleteEducation(e) {
        e.preventDefault()
        console.log(this.state.education.id)

        this.setState({
            educations: this.state.educations.slice(0, -1)
        })

        this.props.deleteEducation(0, -1)
    }


    render() {
        const { education } = this.state
        const { formTitle } = this.props

        return(
            <div className="form-container">
                <div className="form-title">{ formTitle }</div>

                <form onSubmit={ this.onSubmitEducation }>
                    <input type="text" placeholder="University/College" name="university" id="uniInput" onChange={ this.handleChange } value={ education.university }></input>
                    <input type="text" placeholder="Degree" name="degree" id="degreeInput" onChange={ this.handleChange } value={ education.degree }></input>
                    <label htmlFor="startDateInput">start Date</label>
                    <input type="text" placeholder="20/07/2018" name="startDate" id="startDateInput" onChange={ this.handleChange } value={ education.startDate }></input>
                    <label htmlFor="completionDateInput">completion Date</label>
                    <input type="text" placeholder="20/07/2020" name="completionDate" id="completionDateInput" onChange={ this.handleChange } value={ education.completionDate }></input>
                    <label htmlFor="startDateInput">city</label>
                    <input type="text" placeholder="Lagos" name="city" id="ciyuInput" onChange={ this.handleChange } value={ education.city }></input>
                    <label htmlFor="completionDateInput">country</label>
                    <input type="text" placeholder="Nigeria" name="country" id="countryInput" onChange={ this.handleChange } value={ education.country }></input>
                </form>

                <div className="form-btns">
                    <button className="delete-btn" id="save-btn" onClick={ this.onSubmitEducation } >save</button>
                    <button className="delete-btn" id="del-btn" onClick={ this.deleteEducation } >delete</button>
                    {/* <button className="add-new-btn" id="add-btn" onClick={ this.addEducation } >add new Education</button> */}
                </div>

                {/* <div className="education-list">
                    <DisplayEducation educations={educations} />

                </div> */}



            </div>
        )
    }
}

export default Education;