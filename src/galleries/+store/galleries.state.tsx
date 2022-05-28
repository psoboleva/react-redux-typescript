import { GalleryItemResponse, GalleriesResponse } from '../../_types/galleries.type';
import { AsyncData } from '../../_types/shared.type';

export type GalleriesState = {
    galleries?: GalleriesResponse;
    selectedGallery?: GalleryItemResponse;
    loading: boolean;
};