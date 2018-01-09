import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import {loadState, saveState} from "./localStorage";
import reducers from './reducers'

const initialState = loadState();
let store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    saveState(store.getState());
});

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('reactView')
);