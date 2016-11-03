import React from 'react';
import Article from 'src/Article/Article.jsx';
import AppStore from 'src/App/AppStore.js';
import {AppActions} from 'src/App/AppActions.js';
import ixhr from 'src/i/ixhr';

/**
 * Articles List
 */
class ArticlesList extends React.Component {

    state = {
        indexOpenArticle: null
    }

    audience = {
        putArticles: ::this.putArticles
    }

    getArticles () {
        var params = {
            method: 'GET',
            url: 'http://localhost:9090/api/article'
        };

        ixhr.send(params, ::this.getArticlesSuccess, ::this.getArticlesError)
    }

    getArticlesSuccess (status, articles) {
        console.log('getArticlesSuccess');
        AppActions.getArticles(articles);
    }

    getArticlesError () {
        console.error('getArticlesError', arguments);
    }

    putArticles () {
        console.log('ArticleList register event putArticles and render');
        this.forceUpdate();
    }

    componentDidMount () {
        console.log('ArticleList subscribe to event putArticles');
        AppStore.bind('putArticles', this.audience.putArticles);
        this.getArticles();
    }

    componentWillUnmount () {
        console.log('ArticleList unsubscribe to event putArticles');
        AppStore.unbind('putArticles', this.audience.putArticles);
    }

    toggleComments (articleId) {
        var {indexOpenArticle} = this.state;

        if (indexOpenArticle === articleId) {
            indexOpenArticle = null;
        } else {
            indexOpenArticle = articleId;
        }

        this.setState({
            indexOpenArticle: indexOpenArticle
        });
    }

    render () {
        var {articles} = AppStore,
            {indexOpenArticle} = this.state;

        return (
            <div className='articles'>
                <div>Articles: {articles && articles.length || 'loading...'}</div>
                {articles && articles.map(
                    article => <Article
                                    key={article.id}
                                    article={article}
                                    showComments={indexOpenArticle === article.id}
                                    toggleComments={this.toggleComments.bind(this, article.id)}
                                    />)}
            </div>
        );
    }
}

export default ArticlesList;
