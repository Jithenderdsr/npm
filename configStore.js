// config Store
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = {
	data: [],
	hasErrored: false,
	isLoading: false
}
// NB: initialState is optional
export default function configStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}
