/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Navbar from "./components/navbar";
import PersonalDetails from "./components/formComponentPersonal";
import WorkExperience from "./components/formComponentWorkExp";
import Education from "./components/formComponentEducation";

class App extends Component {
    constructor(props) {
        super(props)

    }

    render() {

        return(
            <div>
                <Navbar title="CV - Kreator"/>
                <PersonalDetails formTitle='Personal Details' />
                <WorkExperience formTitle='Work Experience' />
                <Education formTitle='Education' />
                
            </div>
        )
    }
}

export default App;
