import React from 'react'

export default function Register(props) {
    function executeRegister(event) {
        event.preventDefault();
        props.onSubmit(event);
        props.history.goBack();
    }

    function Cancel(event) {
        event.preventDefault();
        props.history.goBack();
    }
    return (
        <div className="form">
            <h1>Registration form</h1>
            <form onSubmit= { executeRegister }>
                <label>Name:</label>
                <br/>
                <input type="text" name="name"></input>
                <br/>
                <label>Address:</label>
                <br/>
                <input type="text" name="address"></input>
                <br/>
                <label>Email:</label>
                <br/>
                <input type= "text" name="email"></input>
                <br/>
                <label>Phone:</label>
                <br/>
                <input type="number" name="phone"></input>
                <br/>
                <input type="submit" value= "Submit"/>
                <button onClick = { Cancel }>Cancel</button>
            </form>
        </div>
    )
}
