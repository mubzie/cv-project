/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

class NewEducation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { educationArrs, handleChange } = this.props

        return(
            <>
                {educationArrs.map(educationArr => {
                    return <form key={ educationArr.id } >
                        <input type="text" placeholder="UUniversity/College" name="university" id="uniInput" onChange={ handleChange } value={ educationArr.university }></input>
                        <input type="text" placeholder="Degree" name="degree" id="uniInput" onChange={ handleChange } value={ educationArr.degree }></input>
                        <label htmlFor="startDateInput">Start Date</label>
                        <input type="date" placeholder="Start Date" name="start-date" id="uniInput" onChange={ handleChange } value={ educationArr.startDate }></input>
                        <label htmlFor="startDateInput">Completion Date</label>
                        <input type="date" placeholder="Completion Date" name="completion-date" id="uniInput" onChange={ handleChange } value={ educationArr.completionDate }></input>

                    </form>
                })

                }
            </>
        )
    }
}

export default NewEducation;