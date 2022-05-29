import { GalleriesState } from './galleries.state';
import { GalleriesActionTypes } from './galleries.actions';

const initialState: GalleriesState = {
    loading: false,
};

export const galleriesReducer = (state: GalleriesState = initialState, action: GalleriesActionTypes) => {
        switch (action.type) {
          case 'LOAD_GALLERIES':
            return {
              ...state,
              loading: true,
            };
          case 'LOAD_GALLERIES_SUCCESS':
            return {
                ...state,
                galleries: action.galleries,
                loading: false,
            };

          case 'LOAD_GALLERIES_FAILURE':
            return {
                ...state,
                error: action.error,
                loading: false
            };

          default:
            return state;
        }
      }