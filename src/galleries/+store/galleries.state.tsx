import { Gallery, GalleryItemResponse } from '_types';

export type GalleriesState = {
    galleries?: Gallery[];
    selectedGallery?: GalleryItemResponse;
    loading: boolean;
};