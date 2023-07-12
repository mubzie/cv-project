/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class PersonalDetails extends Component {
    constructor (props) {
        super(props)

        this.state = {
            personal: {
                fullName: 'Mubarak Rabiu',
                occupation: 'Software Engineer',
                phone: '+2348154356599',
                email: 'rabiumubarak92@gmail.com',
                address: 'Lagos Nigeria'
            }
        }

        this.handleChange = this.handleChange.bind(this)

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


    render() {
        const { formTitle, personal } = this.state;

        return(
            <div className="form-container">
                <div>{ formTitle }</div>

            <form>
                <input type="text" placeholder="Full Name" name="fullName" id="nameInput" onChange={ this.handleChange } value={ personal.fullName }></input>
                <input type="text" placeholder="Occupation" name="occupation" id="occupationInput" onChange={ this.handleChange } value={ personal.occupation }></input>
                <input type="text" placeholder="Phone Number" name="phone" id="phoneInput" onChange={ this.handleChange } value={ personal.phone }></input>
                <input type="text" placeholder="Email" name="email" id="emailInput" onChange={ this.handleChange } value={ personal.email }></input>
                <input type="text" placeholder="Address" name="address" id="addressInput" onChange={ this.handleChange } value={ personal.address }></input>
            </form>

            </div>
        )
    }
}

export default PersonalDetails;