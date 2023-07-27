/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import uniqid from 'uniqid'
import DisplayWorkExp from "./displayWorkExp";

class WorkExperience extends Component {
    constructor(props) {
        super(props)

       this.state = {
            workExperience: {
                company: 'Google',
                role: 'Software',
                startDate: '07/2022',
                endDate: 'present',
                id: uniqid(),
                city: 'Silicon Valley',
                country: 'USA'
            },

            workExperiences: []

        }

        this.handleChange = this.handleChange.bind(this)
        this.onSubmitExperience = this.onSubmitExperience.bind(this)
        this.deleteWorkExperience = this.deleteWorkExperience.bind(this)
        this.onClearButton = this.onClearButton.bind(this)

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

    onSubmitExperience(e) {
        e.preventDefault()

        this.setState({
            workExperiences: this.state.workExperiences.concat(this.state.workExperience),
            workExperience: {
                company: 'Google',
                role: 'Software',
                startDate: '07/2022',
                endDate: 'present',
                id: uniqid(),
                city: 'Silicon Valley',
                country: 'USA'
            },
        
        })
        
        this.props.addWorkExperience(this.state.workExperience)
    }

    onClearButton() {
        this.setState({
            workExperience: {
                company: '',
                role: '',
                startDate: '',
                completionDate: '',
                id: uniqid(),
                city: '',
                country: ''
            }
        })

    }

    deleteWorkExperience(e) {
        e.preventDefault()
        console.log(this.state.workExperience.id)

        this.setState({
            workExperiences: this.state.workExperiences.slice(0, -1)
        })

        this.props.deleteWorkExperience(0, -1)
    }

    render() {
        const { workExperience } = this.state;
        const { formTitle } = this.props

        
        return(
            <div className="form-container-workexp">
                <div className="form-title">{ formTitle }</div>

                <form onSubmit={ this.onSubmitExperience }>
                    <input type="text" placeholder="Company" name="company" id="nameInput" onChange={ this.handleChange } value={ workExperience.company }></input>
                    <input type="text" placeholder="Role" name="role" id="occupationInput" onChange={ this.handleChange } value={ workExperience.role }></input>
                    
                    <div className="info-container">
                        <div className="info-title">
                            <label htmlFor="startDateInput">start Date</label>
                            <input type="text" placeholder="Start Date" name="startDate" id="startDateInput" onChange={ this.handleChange } value={ workExperience.startDate }></input>

                        </div>
                        <div className="info-title">
                            <label htmlFor="endDateInput">end Date</label>
                            <input type="text" placeholder="End Date" name="endDate" id="endDateInput" onChange={ this.handleChange } value={ workExperience.endDate }></input>

                        </div>

                    </div>

                    <div className="info-container">
                        <div className="info-title">
                            <label htmlFor="startDateInput">city</label>
                            <input type="text" placeholder="city" name="city" id="cityInput" onChange={ this.handleChange } value={ workExperience.city }></input>

                        </div>
                        <div className="info-title">
                            <label htmlFor="endDateInput">country</label>
                            <input type="text" placeholder="country" name="country" id="countryInput" onChange={ this.handleChange } value={ workExperience.country }></input>

                        </div>

                    </div>
                </form>

                <div className="form-btns">
                    <div className="btn-title">
                        <button className="delete-btn" onClick={ this.deleteWorkExperience }>Delete</button>
                        <button className="clear-btn" onClick={ this.onClearButton } >Cancel</button>

                    </div>

                    <button className="save-btn" onClick={ this.onSubmitExperience }>Save</button>
                </div>

            </div>
        )
    }
}

export default WorkExperience;