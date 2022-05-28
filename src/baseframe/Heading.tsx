import React, { FC } from 'react';

type HeadingProps = {
    title: string;
};

const Heading: FC<HeadingProps> = ({ title }) => <h2 className="heading">{ title }</h2>

export default Heading;