import React from 'react';
import {withRouter, Link} from 'react-router';
import Comment from '../Comment/Comment'
import ixhr from 'src/i/ixhr';

/**
 * Article
 * @param {Object}      article
 * @param {Boolean}     showComments
 * @param {Function}    toggleComments
 */
class Article extends React.Component {
    static defaultProps = {
        showComments: false
    }

    state = {
        showComments: false,
        comments: []
    }

    getCommentSuccess(status, comment) {
        this.setState({
            comments: this.state.comments.concat([comment])
        })
    }

    getCommentError() {
        console.error(arguments)
    }

    toggleComments () {

        const {showComments} = this.state;

        this.setState({
            showComments: !this.state.showComments
        })

        if (showComments) return;

        for (var commentId of this.props.article.comments) {
            var params = {
                method: 'GET',
                url: 'http://localhost:9090/api/comment/' + commentId
            };
            ixhr.send(params, ::this.getCommentSuccess, ::this.getCommentError)
        }

    }

    goToArticlePage () {
        var {article, router} = this.props;

        console.log('props', `http://localhost:9090/article/${article.id}`, this.props);
        router.push(`/article/${article.id}`);
    }

    render () {
        var {article, toggleComments, showComments} = this.props;

        return (
            <div className='article'>
                <h2 onClick={::this.goToArticlePage}>{article.title}</h2>
                <div>
                    {article.text}
                </div>
                <div>
                    <Link to={`/article/${article.id}`}>More</Link>
                </div>
                <div className='comments'>
                    <div className='comments-bar' onClick={::this.toggleComments}>
                        {article.comments && `Comments: ${article.comments.length}`}
                    </div>
                    <div className='comments-list' style={{display: this.state.showComments ? 'block' : 'none'}}>
                        {this.state.comments.length > 0 && this.state.comments.map(
                            comment => <Comment key={comment.id} comment={comment}/>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Article);
