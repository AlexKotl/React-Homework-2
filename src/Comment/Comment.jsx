import React from 'react';
require('./Comment.css');

export default class Comment extends React.Component {

    render() {
        const {text, id, name} = this.props.comment;
        return (
            <div className="comment">
                <b>{name.first} {name.last}:</b>
                <p>{text}</p>
            </div>
        )
    }

}