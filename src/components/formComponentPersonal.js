/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import { HiOutlineChevronRight } from "react-icons/hi"

class PersonalDetails extends Component {
    constructor (props) {
        super(props)

    }


    render() {
        const { formTitle, personal, handleChange, saveButton, clearButton } = this.props

        return(
            <div className="form-container-personal">
                <div className="form-header-container">
                    <div className="form-title">{ formTitle }</div>
                    <div className="icon"><HiOutlineChevronRight /></div>

                </div>

                <form>
                    <input type="text" placeholder="Full Name" name="fullName" id="nameInput" onChange={ handleChange } value={ personal.fullName }></input>
                    <input type="text" placeholder="Occupation" name="occupation" id="occupationInput" onChange={ handleChange } value={ personal.occupation }></input>
                    <input type="text" placeholder="Phone Number" name="phone" id="phoneInput" onChange={ handleChange } value={ personal.phone }></input>
                    <input type="text" placeholder="Email" name="email" id="emailInput" onChange={ handleChange } value={ personal.email }></input>
                    <input type="text" placeholder="State, Country" name="address" id="addressInput" onChange={ handleChange } value={ personal.address }></input>
                    <textarea rows="5" cols="30" placeholder="write short information about yourself" name="profile" id="profileInput" onChange={ handleChange } value={ personal.profile }></textarea>
                </form>

                <div className="form-btns">
                    {/* <button className="save-btn" onClick={ saveButton }>Save</button> */}
                    {/* <button className="delete-btn" onClick={ clearButton }>clear</button> */}
                </div>

            </div>
        )
    }
}

export default PersonalDetails;