import { Gallery, GalleriesResponse } from '_types';

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

}