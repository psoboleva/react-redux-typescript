import { Gallery, GalleryItem } from "_types";
  
  export type GalleriesActionTypes =
    | { type: 'LOAD_GALLERIES'; }
    | { type: 'LOAD_GALLERIES_SUCCESS'; galleries: Gallery[] }
    | { type: 'LOAD_GALLERIES_FAILURE'; error: string }
    | { type: 'LOAD_GALLERY'; id: number }
    | { type: 'LOAD_GALLERY_SUCCESS'; selectedGallery: GalleryItem }
    | { type: 'LOAD_GALLERY_FAILURE'; error: string }
  
  // action creators
  export const LoadGalleries = (): GalleriesActionTypes => ({ type: 'LOAD_GALLERIES' });

  export const LoadGalleriesSuccess = (galleries: Gallery[]): GalleriesActionTypes => 
      ({ type: 'LOAD_GALLERIES_SUCCESS', galleries });
  
  export const LoadGalleriesFailure = (error: string): GalleriesActionTypes => ({ type: 'LOAD_GALLERIES_FAILURE', error });

  export const LoadGallery = (id: number): GalleriesActionTypes => ({ type: 'LOAD_GALLERY', id });

  export const LoadGallerySuccess = (selectedGallery: GalleryItem): GalleriesActionTypes => 
      ({ type: 'LOAD_GALLERY_SUCCESS', selectedGallery });
  
  export const LoadGalleryFailure = (error: string): GalleriesActionTypes => ({ type: 'LOAD_GALLERY_FAILURE', error });