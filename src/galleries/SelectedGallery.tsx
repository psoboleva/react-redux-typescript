import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useSelectedGalleryEffect } from './+store/galleries.effects';
import { GalleriesFacade } from './+store/galleries.facade';

export const SelectedGallery: FC<{}> = (): JSX.Element => { 

  const F = GalleriesFacade();
  const { id } = useParams();

  useSelectedGalleryEffect(id);

  return (
    !!F.selectedGallery ?
    (<>
      <h4>{F.selectedGallery.title}</h4>
      <div className="photos-wrapper">
        {F.selectedGallery.photos.map((photo, i) => (
          <div className="item" key={i}>
            <img src={photo.thumbnail} />
          </div>
        ))}
      </div> 
    </>) : <></>
      
  );
};

export default SelectedGallery;