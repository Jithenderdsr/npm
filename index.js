// enter here
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './store/configStore';

import FilmList from './components/listFlms';


const store = configStore();

render(
    <Provider store={store}>
        <FilmList />
    </Provider>,
    document.getElementById('app')
);
