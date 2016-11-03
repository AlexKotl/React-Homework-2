import React, { Component } from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';

import Page from 'src/Page/Page.jsx';
import ArticlesList from 'src/ArticlesList/ArticlesList.jsx';
import ArticlePage from 'src/Article/ArticlePage.jsx';

render (
    <Router history={browserHistory}>
        <Route path='/' component={Page}/>
        <Route path='articles' component={ArticlesList}/>
        <Route path='article' component={Page}>
            <IndexRedirect to='/articles'/>
            <Route path=':id' component={ArticlePage}/>
        </Route>
        <Route path="*">
            <IndexRedirect to='/articles'/>
        </Route>
    </Router>,
    document.getElementById('container')
)
