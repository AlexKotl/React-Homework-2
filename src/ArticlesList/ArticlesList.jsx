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
        indexOpenArticle: null,
        currentComments: []
    }

    audience = {
        putArticles: ::this.putArticles,
        changeFilter: ::this.changeFilter
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
        AppStore.bind('changeFilter', this.audience.changeFilter);
        this.getArticles();
    }

    componentWillUnmount () {
        console.log('ArticleList unsubscribe to event putArticles');
        AppStore.unbind('putArticles', this.audience.putArticles);
        AppStore.unbind('changeFilter', this.audience.changeFilter);
    }

    changeFilter() {
        console.log('Filter changed and render');
        this.forceUpdate();
    }

    changeInput (name, value) {
        AppActions.changeFilter(value);
    }

    render () {
        var {articles} = AppStore,
            {indexOpenArticle} = this.state,
            filter = AppStore.currentFilter;

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
                                    />)}
            </div>
        );
    }
}

export default ArticlesList;
