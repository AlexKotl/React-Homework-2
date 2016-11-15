import React from 'react';
require('./Comment.css');

export default class Comment extends React.Component {

    render() {
        const {text, id} = this.props.comment;
        return (
            <div className="comment">
                Comment {id}
                <p>{text}</p>
            </div>
        )
    }

}