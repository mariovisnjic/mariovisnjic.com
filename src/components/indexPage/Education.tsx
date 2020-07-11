import styled from '@emotion/styled';
import { NextPage } from 'next';
import React, { useContext } from 'react';

import { ThemeContext, ThemeContextType } from '../../util/themeContext';

const MainWrap = styled.div`
    display: flex;
    min-width: 800px;
    align-items: center;
`;

interface Props {
    fakeProp?: string;
}

const Education: NextPage<Props> = () => {
    const theme: ThemeContextType = useContext(ThemeContext);

    return <div>Education</div>;
};

export default Education;
