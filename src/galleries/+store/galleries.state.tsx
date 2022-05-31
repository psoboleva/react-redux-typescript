import { Gallery, GalleryItem, GalleryItemResponse } from '_types';

export type GalleriesState = {
    galleries?: Gallery[];
    selectedGallery?: GalleryItem;
    loading: boolean;
};