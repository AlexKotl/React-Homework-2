import MicroEvent from 'microevent';
import {AppActions} from 'src/App/AppActions.js';

var AppStore = new MicroEvent();

AppActions.iDispatcher.register(function (payload) {
    console.log('AppStore register event', payload.eventName);
    switch (payload.eventName) {
        case 'get-articles':
            AppStore.articles = payload.data;
            AppStore.trigger('putArticles');
            break;
        case 'add-comment':
            AppStore.comment = payload.data;
            //AppStore.trigger('addComment');
            break;
        case 'change-filter':
            AppStore.currentFilter = payload.data;
            AppStore.trigger('changeFilter');
            break;
    }

    return true;
});

export default AppStore;
