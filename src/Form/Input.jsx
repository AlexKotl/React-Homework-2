import React from 'react';

/**
 * Input
 * @params {String}     name
 * @params {Function}   onChange
 * @params {String}     defaultValue
 * @params {String}     value
 */
class Input extends React.Component {
    state = {
        value: this.props.value || this.props.defaultValue
    }

    onChange (event) {
        this.props.onChange && this.props.onChange(this.props.name, event.target.value);

        this.setState({
            value: event.target.value
        });
    }

    render () {
        var {error, name} = this.props;

        return (
            <div className='input'>
                <div className='input__body'>
                    <input className='input__input'
                        name={name}
                        onChange={::this.onChange}
                        />
                </div>
                <div className='input_error'>
                    {error}
                </div>
            </div>
        );
    }
}

export default Input;
