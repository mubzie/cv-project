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
        return(
            <form>
                <label htmlFor="taskInput">Enter input</label>
                <input type="text" id="taskInput" onChange={this.handleFullName} value={this.state.fullName}></input>
                <input type="text" id="taskInput" onChange={this.handleOccupation} value={this.state.occupation}></input>
                <input type="text" id="taskInput" onChange={this.handlePhone} value={this.state.phone}></input>
                <input type="text" id="taskInput" onChange={this.handleEmail} value={this.state.email}></input>
                <input type="text" id="taskInput" onChange={this.handleAddress} value={this.state.address}></input>
            </form>
        )
    }
}

export default PersonalDetails