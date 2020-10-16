import React, { Component } from 'react';

class AddTodo extends Component {
    render() {
        return (
            <form style={{ display: "flex" }}>
                <input 
                    type="text" 
                    name="title" 
                    style={{ flex: "10", padding: "5px" }}
                    placeholder="New Todo Here"
                />
                <input 
                    type="submit" 
                    value="Submit"
                    className="btn"
                    style={{ flex: "1" }}
                />
            </form>
        )
    }
}

export default AddTodo;