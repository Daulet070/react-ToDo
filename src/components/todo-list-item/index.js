import React, { Component } from 'react';

import './todo-list-item.css';

class TodoListItem extends Component {

    state = {
        done: false
    };
    
    onLabelClick = () => {
        this.setState({
            done: true
        });
        console.log(`Done: ${this.props.label}`)
    };

    render() {
        
        const { label, important = false } = this.props;
        const { done } = this.state;

        let classNames = 'todo-list-item';
        
        if (done) classNames += ' done';

        const style = {
            color: important ? 'tomato' : 'black'
        }
        
        return (
            <span className={classNames}>
                <span className="todo-list-item-label" 
                    style={style}
                    onClick={ this.onLabelClick }>
    
                    { label }
    
                </span>
                <button className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation"></i>
                </button>
                <button className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o"></i>
                </button>
            </span>
        )
    }
};

export { TodoListItem };
