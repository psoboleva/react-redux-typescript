import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GalleriesService, GalleriesMapper } from '_services';
import * as GalleriesActions from './galleries.actions';
import { GalleriesFacade } from './galleries.facade';

const api = new GalleriesService();
const mapper = new GalleriesMapper();

export const useGalleriesEffect = (): void => {
    const F = GalleriesFacade();
    const dispatch = useDispatch();
    useEffect(() => {
        if(!F.galleries) {
            dispatch(GalleriesActions.LoadGalleries());
            try {
                api.getGalleries()
                .then((result) => dispatch(GalleriesActions.LoadGalleriesSuccess(
                    mapper.mapGalleries(result)
                )))
            } catch (error) {
                dispatch(GalleriesActions.LoadGalleriesFailure(error as string));
            }
        }
    }, [])

};

export const useSelectedGalleryEffect = (galleryId?: string): void => {
    const id = galleryId && parseInt(galleryId);
    const F = GalleriesFacade();
    const dispatch = useDispatch();
    useEffect(() => {
        if(!!id && F.selectedGallery?.id !== id) {
            dispatch(GalleriesActions.LoadGallery(id));
            try {
                api.getGallery(id)
                .then((result) => dispatch(GalleriesActions.LoadGallerySuccess(
                    mapper.mapGalleryItem(result)
                )))
            } catch (error) {
                dispatch(GalleriesActions.LoadGalleryFailure(error as string));
            }
        }
    }, [])

};