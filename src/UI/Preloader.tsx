import React, { FC } from 'react';

type PreloaderProps = {
    title?: string;
};

export const Preloader: FC<PreloaderProps> = ({ title }) => <h4 className="preloader">Loading { title }</h4>

export default Preloader;