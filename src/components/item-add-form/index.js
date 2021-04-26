import React, {Component} from 'react';

import './add-item-form.css'

class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    };
    render() {
        return (
            <form className="item-add-form d-flex"
                    onSubmit={this.onSubmit}>
                <input type="text" 
                        className="form-control"
                        onChange={this.onLabelChange}
                        placeholder="What needs to be done"
                        value={this.state.label} />
                <button type="submit" 
                    className="btn btn-outline-secondary"
                    >
                    Add
                </button>
            </form>
        );
    }
}

export { ItemAddForm };