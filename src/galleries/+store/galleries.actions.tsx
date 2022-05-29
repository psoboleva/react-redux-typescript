import { Gallery } from "_types";
  
  export type GalleriesActionTypes =
    | { type: 'LOAD_GALLERIES'; }
    | { type: 'LOAD_GALLERIES_SUCCESS'; galleries: Gallery[] }
    | { type: 'LOAD_GALLERIES_FAILURE'; error: string };
  
  // action creators
  export const LoadGalleries = (): GalleriesActionTypes => ({ type: 'LOAD_GALLERIES' });

  export const LoadGalleriesSuccess = (galleries: Gallery[]): GalleriesActionTypes => 
      ({ type: 'LOAD_GALLERIES_SUCCESS', galleries });
  
  export const LoadGalleriesFailure = (error: string): GalleriesActionTypes => ({ type: 'LOAD_GALLERIES_FAILURE', error });