import { AsyncData, GalleryItemResponse, GalleriesResponse } from '_types';

export type GalleriesState = {
    galleries?: GalleriesResponse;
    selectedGallery?: GalleryItemResponse;
    loading: boolean;
};