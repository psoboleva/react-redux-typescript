import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Preloader } from 'UI/Preloader';
import GalleriesList from './GalleriesList';
import { SelectedGallery } from './SelectedGallery';
import { GalleriesFacade } from './+store/galleries.facade';

export const GalleriesMain: FC<{}> = (): JSX.Element => { 
  const F = GalleriesFacade();
  const { id } = useParams();

  return (
      <>
      { F.loading && <Preloader />}
      { !id ? <GalleriesList /> : <SelectedGallery />}
      </>
  );
};

export default GalleriesMain;