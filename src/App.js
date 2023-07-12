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
                address: 'Lagos Nigeria'
            },

            workExperience: {
                company: 'Google',
                role: 'Software Engineer',
                startDate: "2023-07-10",
                endDate: "2023-07-10",
            },

            education: {
                university: 'University of Lagos',
                degree: 'Software Engineering',
                startDate: "2023-07-10",
                completionDate: "2023-07-10",
            }

        }

        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(e) {
        this.setState({
            personal: {
                [e.target.name]: e.target.value
            },
            workExperience: {
                [e.target.name]: e.target.value
            },
            education: {
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        const { personal, workExperience, education } = this.state

        return(
            <div>
                <Navbar title="CV - Kreator"/>
                <PersonalDetails formTitle='personal Details' handleDataChange={ this.handleChange } data={ personal } />
                <WorkExperience formTitle='Work Experience' handleDataChange={ this.handleChange } data={ workExperience }/>
                <Education formTitle='Education' handleDataChange={ this.handleChange } data={ education }/>
            </div>
        )
    }
}

export default App;
