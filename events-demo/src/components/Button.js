import React, { Component } from 'react'

export default class Buttons extends Component {
    
    buttonClicked = () => {
        console.log("It works");
        this.props.isClicked();
    }
    
    render() {

            const style = {
            width: "200px",
            height: "100px",
            backgroundColor: "blue",
            color: "white",
            border: "1px solid black"
        };
        return (
            <div  style={ style } onClick={ this.buttonClicked }>
                My great button
            </div>
        )
    }
}
