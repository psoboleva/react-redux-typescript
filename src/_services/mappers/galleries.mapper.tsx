import { Gallery, GalleriesResponse, GalleryItemResponse, GalleryItem } from '_types';

export class GalleriesMapper {

    public mapGalleries(data: GalleriesResponse): Gallery[] {

        const galleries = Object.keys(data).map((key) => {
            const id = parseInt(key)
            return({
                id,
                title: data[id].post_title,
                thumbnail: data[id].thumbnail || '',
            })
        });

        return galleries;
    }

    mapPhotos(data: GalleryItemResponse): Gallery[] {

        return Object.keys(data.items).map((key) => {
            const id = parseInt(key);
            const fileName = data.items[id].data.guid.split('/').reverse()[0];
            const thumbnail = data.items[id].data.guid.replace(fileName, data.items[id].metadata.sizes.medium.file);

            return {
                id,
                title: data.items[id].post_title,
                thumbnail,
                subtitle: data.items[id].post_excerpt || null,
                description: data.items[id].post_content || null,
                fullSize: data.items[id].guid,
            }

        });
    }

    mapGalleryItem(data: GalleryItemResponse): GalleryItem {
        return ({
            id: data.parent_id,
            title: data.parent_title,
            description: data.parent_data.Description || '',
            photos: this.mapPhotos(data)
        });
    }
}

