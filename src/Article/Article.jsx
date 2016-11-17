import React from 'react';
import {withRouter, Link} from 'react-router';
import Comment from '../Comment/Comment'
import ixhr from 'src/i/ixhr';
import AppStore from 'src/App/AppStore.js';
import {AppActions} from 'src/App/AppActions.js';

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
        //comments: []
    }

    // audience = {
    //     addCommentStore: ::this.addCommentStore
    // }

    getCommentSuccess(status, comment) {
        AppActions.addCommentStore(comment);

        //console.log(AppStore.comments);
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

        this.getComments();
    }

    getComments() {
        for (var commentId of this.props.article.comments) {
            if (AppStore.comments.find(el => el.id == commentId)) {
                console.log('Comment already loaded');
                continue;
            }

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

    updateCommentForm(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    putComment() {
        if (!this.state.commentText || this.state.commentText.length == 0) {
            alert('Enter comment text');
            return;
        }

        ixhr.send({
            method: 'POST',
            url: 'http://localhost:9090/api/comment',
            body: {
                name: this.state.commentName,
                text: this.state.commentText,
                article: this.props.article.id
            }
        },
            ::this.putCommentSuccess, console.log)
    }

    putCommentSuccess(code, comment) {
        // add new comment ID
        this.props.article.comments.push([comment.id]);

        // force reload comments
        this.setState({
            comments: []
        });
        this.getComments();

        alert('Your comment was added');
    }
    
    refreshComments() {
        this.forceUpdate();
    }

    componentDidMount () {
        AppStore.bind('refreshComments', ::this.refreshComments);
    }

    componentWillUnmount () {
        AppStore.unbind('refreshComments', ::this.refreshComments);
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
                        {this.props.article.comments.map(
                            comment_id => <Comment key={comment_id} comment={AppStore.comments.find(el => el.id === comment_id) || {}}/>
                        )}

                        <div className="comments-form">
                            <input name="commentName" type="text" placeholder="Your name" onChange={::this.updateCommentForm} /> <br/>
                            <textarea name="commentText" placeholder="Enter your comment here..." onChange={::this.updateCommentForm} /> <br/>
                            <button onClick={::this.putComment}>Add comment</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Article);
