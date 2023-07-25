/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Navbar from "./components/navbar";
import PersonalDetails from "./components/formComponentPersonal";
import WorkExperience from "./components/formComponentWorkExp";
import Education from "./components/formComponentEducation";

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
        const { personal } = this.state

        return(
            <div>
                <Navbar title="CV - Kreator"/>
                {/* <PersonalDetails formTitle='Personal Details' /> */}
                <WorkExperience formTitle='Work Experience' addWorkExperience={ this.addWorkExperience } deleteWorkExperience={ this.deleteWorkExperience } />
                <Education formTitle='Education' addEducation={ this.addEducation } deleteEducation={ this.deleteEducation } />
                
            </div>
        )
    }
}

export default App;
