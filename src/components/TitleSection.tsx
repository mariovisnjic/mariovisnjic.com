/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React, { useContext } from 'react';

import { ThemeContext, ThemeContextType } from '../util/themeContext';

const TitleSectionComponent = styled.div`
    padding: 5vh 10vh;
    color: white;
    text-align: center;
    background: ${(props: ThemeContextType) => props.primaryColor};
`;

interface Props {
    mainTitle: string;
    subTitle?: string;
}

const TitleSection: React.FC<Props> = (props: Props): JSX.Element => {
    const theme: ThemeContextType = useContext(ThemeContext);

    return (
        <TitleSectionComponent {...theme}>
            <h1>{props.mainTitle}</h1>
            {props.subTitle && <p>{props.subTitle}</p>}
        </TitleSectionComponent>
    );
};

export default TitleSection;
