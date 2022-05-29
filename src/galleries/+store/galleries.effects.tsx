import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GalleriesService } from '_services';
import * as GalleriesActions from './galleries.actions';

const api = new GalleriesService();

export const useGalleriesEffect = () => {
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(GalleriesActions.LoadGalleries());
      try {
          api.getGalleries()
          .then((result) => dispatch(GalleriesActions.LoadGalleriesSuccess(result)))
      } catch (error) {
          dispatch(GalleriesActions.LoadGalleriesFailure(error as string));
      }
  }, [])
};