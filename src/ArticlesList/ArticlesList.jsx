import React from 'react';
import Article from 'src/Article/Article.jsx';
import AppStore from 'src/App/AppStore.js';
import {AppActions} from 'src/App/AppActions.js';
import Input from 'src/Form/Input.jsx';
import InputRow from 'src/Form/InputRow.jsx';
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

        // load comments from API
        // ixhr.send({
        //     method: 'GET',
        //     url: 'http://localhost:9090/api/article'
        // },
        // ::this.getCommentsSuccess, alert);
    }

    changeInput (name, value) {
        this.setState({
            [`${name}`]: value
        });
    }

    render () {
        var {articles} = AppStore,
            {indexOpenArticle, filter} = this.state;

        if (filter) {
            articles = articles.filter(article => article.title.match(filter));
        }

        return (
            <div className='articles'>
                <div>Articles: {articles && articles.length || 'loading...'}</div>
                <InputRow>
                    Filter:
                    <Input name='filter' onChange={::this.changeInput} />
                </InputRow>
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
