import MicroEvent from 'microevent';
import {AppActions} from 'src/App/AppActions.js';

var AppStore = new MicroEvent();
AppStore.comments = {};

AppActions.iDispatcher.register(function (payload) {
    console.log('AppStore register event', payload.eventName);
    switch (payload.eventName) {
        case 'get-articles':
            AppStore.articles = payload.data;
            AppStore.trigger('putArticles');
            break;
        case 'add-comment':
            AppStore.comments[payload.data.id] = payload.data;
            AppStore.trigger('refreshComments');
            break;
        case 'change-filter':
            AppStore.currentFilter = payload.data;
            AppStore.trigger('changeFilter');
            break;
    }

    return true;
});

export default AppStore;
