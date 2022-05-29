import ApiService from './api.service';
import { API_PATHS } from '../constants';
import { GalleriesResponse, GalleryItemResponse } from '../_types/galleries.type';

export class GalleriesService extends ApiService {

    public async getGalleries(): Promise<GalleriesResponse> {
        return await this.getData<GalleriesResponse>(API_PATHS.GALLERY);
    }

    public async getGallery(id: number): Promise<GalleryItemResponse> {
        return await this.getData<GalleryItemResponse>(`${API_PATHS.GALLERY}?id=${id}`);
    }
}