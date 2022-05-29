import { useSelector } from 'react-redux';
import { RootState } from 'rootReducer';

export const GalleriesFacade  = () => ({
    loading: useSelector((state: RootState) => state.galleries.loading),
    galleries: useSelector((state: RootState) => state.galleries.galleries),
});