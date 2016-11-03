import React from 'react';

/**
 * InputRow
 */
class InputRow extends React.Component {
    render () {
        return (
            <div className='input-row'>
                <label className='input-row__label'>
                    {this.props.children && this.props.children[0]}
                </label>
                <div className='input-row__input'>
                    {this.props.children && this.props.children[1]}
                </div>
            </div>
        );
    }
}

export default InputRow;
