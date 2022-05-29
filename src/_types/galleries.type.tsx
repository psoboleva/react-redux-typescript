export interface GalleriesResponse {
    [x: number]: {
        ID: number;
        post_title: string;
        thumbnail: string;
        guid: string;
        post_content: string;
        [x: string]: any;
    }
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
            data: GalleriesResponse;
            [x: string]: any;
        }
    }
}

export interface Gallery {
    id: number;
    title: string;
    thumbnail: string;
}

export interface GalleryItem extends Gallery {
    subtitle: string;
    description: string;
    fullSize: string;
}