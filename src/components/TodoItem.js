import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            backgroundColor: '#84f3a2',
            padding: '10px',
            borderBottom: '1px #fff dotted'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)}/> {' '}
                    { title }
                </p>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired 
}

export default TodoItem;
