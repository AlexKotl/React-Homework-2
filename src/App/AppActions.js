/* Классическая библиотека flux (https://facebook.github.io/flux/docs/overview.html)
 * предоставляет нам только Dispatcher, но нам больше ничего и не нужно
 */
import {Dispatcher} from 'flux';

var iDispatcher = new Dispatcher();

var AppActions = {
    getArticles: function (articles) {
        console.log('AppActions dispatch getArticles');
        iDispatcher.dispatch({
            eventName: 'get-articles',
            data: articles
        });
    },

    addCommentStore: function (comment) {
        iDispatcher.dispatch({
            eventName: 'add-comment',
            data: comment
        });
    },
    
    changeFilter: function(filter) {
        console.log('Dispatched changeFilter');
        iDispatcher.dispatch({
            eventName: 'change-filter',
            data: filter
        });
    }
};

module.exports.AppActions = AppActions;
module.exports.AppActions.iDispatcher = iDispatcher;
