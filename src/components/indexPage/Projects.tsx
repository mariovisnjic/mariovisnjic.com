import { NextPage } from 'next';
import React, { useContext } from 'react';

import { ThemeContext, ThemeContextType } from '../../util/themeContext';

interface Props {
    fakeProp?: string;
}

const Projects: NextPage<Props> = () => {
    const theme: ThemeContextType = useContext(ThemeContext);

    return <div>{JSON.stringify(theme)}</div>;
};

export default Projects;
