/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class PersonalDetails extends Component {
    constructor (props) {
        super(props)

        this.state  = {
            fullName: 'Mubarak Rabiu',
            occupation: 'Software Engineer',
            phone: '+2348154356599',
            email: 'rabiumubarak92@gmail.com',
            address: 'Lagos Nigeria'
        }

        this.handleFullName = this.handleFullName.bind(this)
        this.handleOccupation = this.handleOccupation.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleAddress = this.handleAddress.bind(this)
    }

    handleFullName(e) {
        this.setState({
            fullName: e.target.value,
        })
    }

    handleOccupation(e) {
        this.setState({
            occupation: e.target.value,
        })
    }

    handlePhone(e) {
        this.setState({
            phone: e.target.value,
        })
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value,
        })
    }
    
    handleAddress(e) {
        this.setState({
            address: e.target.value,
        })
    }

    render() {
        const { formTitle } = this.props

        return(
            <div>
                <div>{ formTitle }</div>

            <form>
                <input type="text" placeholder="Full Name" id="nameInput" onChange={this.handleFullName} value={this.state.fullName}></input>
                <input type="text" placeholder="Occupation" id="occupationInput" onChange={this.handleOccupation} value={this.state.occupation}></input>
                <input type="text" placeholder="Phone Number" id="phoneInput" onChange={this.handlePhone} value={this.state.phone}></input>
                <input type="text" placeholder="Email" id="emailInput" onChange={this.handleEmail} value={this.state.email}></input>
                <input type="text" placeholder="Address" id="addressInput" onChange={this.handleAddress} value={this.state.address}></input>
            </form>
            </div>
        )
    }
}

export default PersonalDetails