import { FC } from 'react';
import { GalleriesMain } from 'galleries';

import Heading from '../Heading';

export const GalleriesPage: FC<{}> = () => { 

  return (
      <>
        <Heading title="Galleries" />
        <GalleriesMain />
      </>
     
  );
};

export default GalleriesPage;