import { FC } from 'react';
import { GalleriesFacade } from './+store/galleries.facade';

const GalleriesList: FC<{}> = () => { 

  const F = GalleriesFacade();

  return (
      <>
        {!!F.galleries && F.galleries.map((gallery) => (
          <div>
            {gallery.title}
          </div>
        ))}
      </>
     
  );
};

export default GalleriesList;