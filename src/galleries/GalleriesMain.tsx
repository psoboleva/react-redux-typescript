import { FC } from 'react';

import { Preloader } from 'UI/Preloader';
import GalleriesList from './GalleriesList';
import { useGalleriesEffect } from './+store/galleries.effects';
import { GalleriesFacade } from './+store/galleries.facade';

export const GalleriesMain: FC<{}> = (): JSX.Element => { 
  const F = GalleriesFacade();
  const Content: FC<{}> = (): JSX.Element => F.loading ? <Preloader title={'Galleries'} /> : <GalleriesList />;

  useGalleriesEffect();

  return (<Content />);
};

export default GalleriesMain;