import {Action, createStore} from "redux";

interface TabAction extends Action {
    tabItem: {
        title: string;
        key: string;
    }
}

const tabStore = (state = {}, action: TabAction): {} => {
    return action.tabItem;
}

const store = createStore(tabStore);

export default store;
