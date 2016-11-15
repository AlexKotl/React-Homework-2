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

    goToArticlePage () {
        var {article, router} = this.props;

        console.log('props', `http://localhost:9090/article/${article.id}`, this.props);
        router.push(`/article/${article.id}`);
    }

    renderComment (comment_id) {
        return (
            <Comment commentId={comment_id}/>
        );
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
                    <div className='comments-bar' onClick={toggleComments}>
                        {article.comments && `Comments: ${article.comments.length}`}
                    </div>
                    <div className='comments-list' style={{display: showComments ? 'block' : 'none'}}>
                        {article.comments && article.comments.map(
                            comment_id => this.renderComment(comment_id)
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Article);
