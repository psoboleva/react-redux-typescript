import { FC } from 'react';
import { useState } from 'react';

type ImageProps = {
    src: string;
    className?: string;
};

export const Image: FC<ImageProps> = ({ src, className }): JSX.Element => {
    const [loaded, setLoaded] = useState(false);
  
    return (
        <img
            style={loaded ? { opacity: 1, transition: 'all 0.5s' } : { opacity: 0, transition: 'all 0.5s' }}
            src={src}
            onLoad={() => setLoaded(true)}
            className={className}
        />
    );
  };

export default Image;