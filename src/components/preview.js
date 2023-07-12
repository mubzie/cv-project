/* eslint-disable no-useless-constructor */
import { prettyDOM } from "@testing-library/react";
import React, { Component } from "react";

class Preview extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { personal } = this.props;

        return(
            <div>
                <div> {personal.fullName} </div>
                <div> {personal.occupation} </div>
                <div> {personal.phone} </div>
                <div> {personal.email} </div>
                <div> {personal.address} </div>

            </div>
        )
    }
}

export default Preview;