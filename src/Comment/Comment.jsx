import React from 'react';

export default class Comment extends React.Component {

    render() {
        return (
            <div className="comment">
                Comment {this.props.commentId}
            </div>
        )
    }

}