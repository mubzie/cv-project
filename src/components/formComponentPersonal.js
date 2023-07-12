/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class PersonalDetails extends Component {
    constructor (props) {
        super(props)

    }
    

    render() {
        const { formTitle, handleDataChange, data } = this.props;

        return(
            <div className="form-container">
                <div>{ formTitle }</div>

            <form>
                <input type="text" placeholder="Full Name" id="nameInput" onChange={ handleDataChange } value={ data.fullName }></input>
                <input type="text" placeholder="Occupation" id="occupationInput" onChange={ handleDataChange } value={ data.occupation }></input>
                <input type="text" placeholder="Phone Number" id="phoneInput" onChange={ handleDataChange } value={ data.phone }></input>
                <input type="text" placeholder="Email" id="emailInput" onChange={ handleDataChange } value={ data.email }></input>
                <input type="text" placeholder="Address" id="addressInput" onChange={ handleDataChange } value={ data.address }></input>
            </form>
            </div>
        )
    }
}

export default PersonalDetails;