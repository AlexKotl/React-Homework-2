import React from 'react';
require('./Comment.css');

export default class Comment extends React.Component {

    render() {
        let {text, id, name} = this.props.comment;

        if (name === undefined) name = 'Anonymous';

        return (
            <div className="comment">
                <b>{name.first || ''} {name.last || name}:</b>
                <p>{text}</p>
            </div>
        )
    }

}