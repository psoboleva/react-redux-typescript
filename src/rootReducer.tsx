import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

import { GalleriesState } from './galleries/+store/galleries.state';
import { galleriesReducer } from './galleries/+store/galleries.reducer';

export type RootState = {
    galleries: GalleriesState
}

const rootReducer = combineReducers({
    galleries: galleriesReducer,
    //other features reducers to be added later
})

export function configureStore() {
    const rootState: Partial<RootState> = {
        galleries: {
            loading: false
        }
    };

    return createStore(
        rootReducer,
        rootState,
        composeWithDevTools(),
    );
}