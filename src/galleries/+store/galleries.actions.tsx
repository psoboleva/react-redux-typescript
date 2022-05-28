import { GalleriesResponse } from "../../_types/galleries.type";

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
  export function LoadGalleries(): GalleriesActionTypes {
    return { type: 'LOAD_GALLERIES' };
  }

  export function LoadGalleriesSuccess(galleries: GalleriesResponse): GalleriesActionTypes {
    return { type: 'LOAD_GALLERIES_SUCCESS', galleries };
  }
  
  export function LoadGalleriesFailure(error: string): GalleriesActionTypes {
    return { type: 'LOAD_GALLERIES_FAILURE', error };
  }