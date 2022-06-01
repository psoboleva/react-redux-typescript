import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Image } from 'UI';
import { useGalleriesEffect } from './+store/galleries.effects';
import { GalleriesFacade } from './+store/galleries.facade';

const GalleriesList: FC<{}> = () => { 
  const F = GalleriesFacade();
  useGalleriesEffect();

  return (
      <div className="galleries-wrapper">
        {!!F.galleries && F.galleries.map((gallery, i) => (
          <div className="item" key={i}>
            <Link to={`${gallery.id}`}><Image src={gallery.thumbnail} /></Link>
            {gallery.title}
          </div>
        ))}
      </div>
     
  );
};

export default GalleriesList;