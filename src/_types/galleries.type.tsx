export interface GalleryBase {
    ID: number;
    post_title: string;
    thumbnail: string;
    guid: string;
    post_content: string;
    [x: string]: any;
}

export interface GalleriesResponse {
    [x: number]: GalleryBase;
}

export interface GalleryItemResponse {
    parent_id: number;
    parent_title: string;
    parent_data: {
        [x: string]: any;
        Description?: string;
    },
    items: {
        [x: number]: {
            data: GalleryBase;
            [x: string]: any;
        }
    }
}

export interface Gallery {
    id: number;
    title: string;
    thumbnail: string;
    subtitle?: string;
    description?: string;
    fullSize?: string;
}

export interface GalleryItem {
    id: number;
    title: string;
    description: string;
    photos: Gallery[];
}