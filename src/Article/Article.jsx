import React from 'react';
import {withRouter} from 'react-router'
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
        console.log('props', this.props);
        var {article, router} = this.props;

        router.push({
            pathname: `http://localhost:9090/article/${article.id}`
        });
    }

    renderComment (comment_id) {
        return (
            <div key={comment_id} className='comment'>
                {comment_id}
            </div>
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
