/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Navbar from "./components/navbar";
import PersonalDetails from "./components/formComponentPersonal";
import WorkExperience from "./components/formComponentWorkExp";
import Education from "./components/formComponentEducation";
import Preview from "./components/preview";


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            personal: {
                fullName: 'Mubarak Rabiu',
                occupation: 'Software Engineer',
                phone: '+2348154356599',
                email: 'rabiumubarak92@gmail.com',
                address: 'Lagos Nigeria',
                profile: 'I am a software Engineer working for google'
            },

            workExperienceArr: [],

            educationArr: [],

        }

        this.addWorkExperience = this.addWorkExperience.bind(this)
        this.deleteWorkExperience = this.deleteWorkExperience.bind(this)
        this.addEducation = this.addEducation.bind(this)
        this.deleteEducation = this.deleteEducation.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.onSubmitButton = this.onSubmitButton.bind(this)
        this.onClearButton = this.onClearButton.bind(this)

    }

    handleChange(e) {
        const { name, value } = e.target

        this.setState( prevState => ({
            personal: {
                ...prevState.personal,
                [name]: value,

            }
            
        }))
    }

    onSubmitButton(e) {
        e.preventDefault()

    }

    onClearButton() {
        this.setState({
            personal: {
                fullName: '',
                occupation: '',
                phone: '',
                email: '',
                address: '',
                profile: ''
            }
        })

    }

    addWorkExperience(obj) {

        this.setState({
            workExperienceArr: this.state.workExperienceArr.concat(obj)
        })
    }
    
    deleteWorkExperience(i, count) {
        
        this.setState({
            workExperienceArr: this.state.workExperienceArr.slice(i, count)
        })
    }
    
    addEducation(obj) {

        this.setState({
            educationArr: this.state.educationArr.concat(obj)
        })
    }
    
    deleteEducation(i, count) {

        this.setState({
            educationArr: this.state.educationArr.slice(i, count)
        })
    }

    render() {
        const { personal, educationArr, workExperienceArr } = this.state

        return(
            <div>
                <Navbar title="CV - Kreator"/>

                {/* <PersonalDetails formTitle='Personal Details' /> */}
                <div className="form-container"> 
                    <div className="form-title">Personal Details</div>
                    <form onSubmit={ this.onSubmitButton }>
                        <input type="text" placeholder="Full Name" name="fullName" id="nameInput" onChange={ this.handleChange } value={ personal.fullName }></input>
                        <input type="text" placeholder="Occupation" name="occupation" id="occupationInput" onChange={ this.handleChange } value={ personal.occupation }></input>
                        <input type="text" placeholder="Phone Number" name="phone" id="phoneInput" onChange={ this.handleChange } value={ personal.phone }></input>
                        <input type="text" placeholder="Email" name="email" id="emailInput" onChange={ this.handleChange } value={ personal.email }></input>
                        <input type="text" placeholder="Address" name="address" id="addressInput" onChange={ this.handleChange } value={ personal.address }></input>
                        <textarea rows="5" cols="30" placeholder="write short information about yourself" name="profile" id="profileInput" onChange={ this.handleChange } value={ personal.profile }></textarea>
                    </form>

                    <div className="form-btns">
                    <button className="save-btn" onClick={ this.onSubmitButton }>save</button>
                    <button className="delete-btn" onClick={ this.onClearButton }>clear</button>
                    </div>

                </div>

                <WorkExperience formTitle='Work Experience' addWorkExperience={ this.addWorkExperience } deleteWorkExperience={ this.deleteWorkExperience } />
                <Education formTitle='Education' addEducation={ this.addEducation } deleteEducation={ this.deleteEducation } />

                <Preview personal={ personal } educationArr={ educationArr } workExperienceArr={ workExperienceArr } />
                
            </div>
        )
    }
}

export default App;
