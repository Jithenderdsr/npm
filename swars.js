// Star Wars APIs reducers
import { DATA_IS_LOADING, DATA_HAS_ERRORED, DATA_FETCH_SUCCESS } from '../store/actionStore';

export function dataIsLoading(state = false, action) {
    switch (action.type) {
        case DATA_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function dataHasErrored(state = false, action) {
    switch (action.type) {
        case DATA_HAS_ERRORED:
            return action.hasErrored;
        default:
            return state;
    }
}

export function data(state = [], action) {
    switch (action.type) {
        case DATA_FETCH_SUCCESS:
            return action.data;
        default:
            return state;
    }
}
