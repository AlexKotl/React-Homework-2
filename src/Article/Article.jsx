import React from 'react';

/**
 * Article
 * @param {Object}      article
 * @param {Boolean}     showComments
 * @param {Function}    toggleComments={this.toggleComments.bind(this, article.id)}
 */
class Article extends React.Component {
    static defaultProps = {
        showComments: false
    }

    state = {
        isShow: false,
        showArticle: ::this.showArticle
    }

    showArticle () {
        var {article} = this.refs,
            {top} = article.getBoundingClientRect(),
            isShow = false;

        if (article && top < window.innerHeight && top > 100) {
            isShow = true;
        }

        this.setState({
            isShow: isShow
        });
    }

    componentDidMount () {
        window.addEventListener('scroll', this.state.showArticle);
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.state.showArticle);
    }

    renderComment (comment) {
        return (
            <div key={comment.id} className='comment'>
                <div>{`${comment.name.first} ${comment.name.last}`}</div>
                {comment.text}
            </div>
        );
    }

    render () {
        var {article, toggleComments, showComments} = this.props,
            {isShow} = this.state;

        return (
            <div ref='article' className='article' style={{opacity: isShow ? 1 : 0}}>
                <h2>{article.title}</h2>
                <div>
                    {article.text}
                </div>
                <div className='comments'>
                    <div className='comments-bar' onClick={toggleComments}>
                        {article.comments && `Comments: ${article.comments.length}`}
                    </div>
                    <div className='comments-list' style={{display: showComments ? 'block' : 'none'}}>
                        {article.comments && article.comments.map(
                            comment => this.renderComment(comment)
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;
