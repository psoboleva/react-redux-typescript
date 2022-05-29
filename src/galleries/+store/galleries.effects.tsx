import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GalleriesService, GalleriesMapper } from '_services';
import * as GalleriesActions from './galleries.actions';

const api = new GalleriesService();
const mapper = new GalleriesMapper();

export const useGalleriesEffect = (): void => {
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(GalleriesActions.LoadGalleries());
      try {
          api.getGalleries()
          .then((result) => dispatch(GalleriesActions.LoadGalleriesSuccess(
              mapper.mapGalleries(result)
          )))
      } catch (error) {
          dispatch(GalleriesActions.LoadGalleriesFailure(error as string));
      }
  }, [])
};