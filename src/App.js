/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Navbar from "./components/navbar";
import PersonalDetails from "./components/formComponentPersonal";

class App extends Component {
    constructor() {
        super()

    }


    render() {

        return(
            <div>
                <Navbar title="CV - Kreator"/>
                <PersonalDetails />
            </div>
        )
    }
}

export default App;
