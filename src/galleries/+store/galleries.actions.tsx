import { GalleriesResponse } from "_types";

interface LoadGalleries {}

interface LoadGalleriesFailure {
    error: string
}

interface LoadGalleriesSuccess {
    galleries: GalleriesResponse
}
  
  export type GalleriesActionTypes =
    | { type: 'LOAD_GALLERIES'; }
    | { type: 'LOAD_GALLERIES_SUCCESS'; galleries: GalleriesResponse }
    | { type: 'LOAD_GALLERIES_FAILURE'; error: string };
  
  // action creators
  export const LoadGalleries = (): GalleriesActionTypes => ({ type: 'LOAD_GALLERIES' });

  export const LoadGalleriesSuccess = (galleries: GalleriesResponse): GalleriesActionTypes => 
      ({ type: 'LOAD_GALLERIES_SUCCESS', galleries });
  
  export const LoadGalleriesFailure = (error: string): GalleriesActionTypes => ({ type: 'LOAD_GALLERIES_FAILURE', error });