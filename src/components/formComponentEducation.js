/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import uniqid from 'uniqid'
import { HiOutlineChevronRight } from "react-icons/hi"
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
        this.onClearButton = this.onClearButton.bind(this)

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

    onClearButton() {
        this.setState({
            education: {
                university: '',
                degree: '',
                startDate: '',
                completionDate: '',
                city: '',
                country: '',
                id: uniqid()
            }
        })

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
            <div className="form-container-education">
                <div className="form-header-container">
                    <div className="form-title">{ formTitle }</div>
                    <div className="icon"><HiOutlineChevronRight /></div>

                </div>

                <form onSubmit={ this.onSubmitEducation }>
                    <input type="text" placeholder="University/College" name="university" id="uniInput" onChange={ this.handleChange } value={ education.university }></input>
                    <input type="text" placeholder="Degree" name="degree" id="degreeInput" onChange={ this.handleChange } value={ education.degree }></input>
                    
                    <div className="info-container">
                        <div className="info-title">
                            <label htmlFor="startDateInput">start date</label>
                            <input type="text" placeholder="20/07/2018" name="startDate" id="startDateInput" onChange={ this.handleChange } value={ education.startDate }></input>

                        </div>
                        <div className="info-title">
                            <label htmlFor="completionDateInput">completion date</label>
                            <input type="text" placeholder="20/07/2020" name="completionDate" id="completionDateInput" onChange={ this.handleChange } value={ education.completionDate }></input>

                        </div>

                    </div>

                    <div className="info-container">
                        <div className="info-title">
                            <label htmlFor="startDateInput">city</label>
                            <input type="text" placeholder="Lagos" name="city" id="ciyuInput" onChange={ this.handleChange } value={ education.city }></input>

                        </div>
                        <div className="info-title">
                            <label htmlFor="completionDateInput">country</label>
                            <input type="text" placeholder="Nigeria" name="country" id="countryInput" onChange={ this.handleChange } value={ education.country }></input>

                        </div>

                    </div>
                </form>

                <div className="form-btns">
                    <div className="btn-title">
                        <button className="delete-btn" id="del-button" onClick={ this.deleteEducation } >Delete</button>
                        <button className="clear-btn" id="clear-button" onClick={ this.onClearButton } >Cancel</button>

                    </div>
                    
                    <button className="save-btn" id="save-button" onClick={ this.onSubmitEducation } >Save</button>
                </div>

            </div>
        )
    }
}

export default Education;