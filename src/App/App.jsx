import React, { Component } from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Page from 'src/Page/Page.jsx';
import ArticlesList from 'src/ArticlesList/ArticlesList.jsx';

render (
    <Router history={browserHistory}>
        <Route path='/' component={Page}/>
        <Route path='articles' component={ArticlesList}/>
    </Router>,
    document.getElementById('container')
)
