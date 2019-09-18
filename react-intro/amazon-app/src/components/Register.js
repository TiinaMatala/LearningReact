import React from 'react'

export default function Register(props) {
    return (
        <div className="form">
            <h1>Registration form</h1>
            <form onSubmit= { props.onSubmit }>
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
                <input type="submit" value= "Register"/>
                <button onClick = { props.onCancel }>Cancel</button>
            </form>
        </div>
    )
}
