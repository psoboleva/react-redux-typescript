import { combineReducers } from 'redux';
import { galleriesReducer } from './galleries/+store/galleries.reducer';

const rootReducer = combineReducers({
    galleries: galleriesReducer,
    //other features reducers to be added later
})

export default rootReducer