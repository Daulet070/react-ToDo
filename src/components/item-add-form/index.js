import React, {Component} from 'react';

import './add-item-form.css'

class ItemAddForm extends Component {

    render() {
        const { onAddItem } = this.props;
        return (
            <div className="bottom-panel">
                <button type="button" 
                    className="btn btn-outline-success btn-sm"
                    onClick={() => onAddItem('Hello its me')}>
                    Add item
                </button>
            </div>
        );
    }
}

export { ItemAddForm };