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
          case 'LOAD_GALLERY_FAILURE':
            return {
                ...state,
                error: action.error,
                loading: false
            };
            case 'LOAD_GALLERY':
              return {
                ...state,
                loading: true,
                selectedGallery: undefined,
              };
            case 'LOAD_GALLERY_SUCCESS':
                return {
                    ...state,
                    selectedGallery: action.selectedGallery,
                    loading: false,
                };

          default:
            return state;
        }
      }