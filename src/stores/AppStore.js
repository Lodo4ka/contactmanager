import AppDispatcher from "../dispatcher/AppDispatcher.js";
import AppConstant from "../constans/AppConstant.js";
import { EventEmitter } from "events";

const CHANGE_EVENT = "change";

let _contacts = [];

class AppStoreClass extends EventEmitter {
    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    getContext() {}
    return _contacts;
}

const AppStore = new AppStoreClass();

AppStore.dispatchToken = AppDispatcher.register(action => {
    switch (action.actionType) {

    }
});

export default AppStore;