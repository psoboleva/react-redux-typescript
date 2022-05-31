import React, { FC } from 'react';
import { Spinner } from 'react-bootstrap';

export const Preloader: FC<{}> = (): JSX.Element => 
    <div className="position-absolute w-100 v-100">
        <Spinner animation="grow" variant="light" className="position-fixed top-50 end-50" />
    </div>

export default Preloader;