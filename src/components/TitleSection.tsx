/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React, { useContext } from 'react';

import { ThemeContext, ThemeContextType } from '../util/themeContext';

const TitleSectionComponent = styled.div`
    padding: 5vh 10vh;
    color: white;
    text-align: center;
    background: ${(props: SectionProps) =>
        props.props.backgroundImage
            ? 'linear-gradient(0deg, rgba(' +
              props.theme.primaryColorRGB +
              ', 0.9), rgba(' +
              props.theme.primaryColorRGB +
              ', 0.9)), url(' +
              props.props.backgroundImage +
              ');'
            : props.theme.primaryColor};
    background-repeat: no-repeat;
    background-size: cover;
    background-postition: ${(props: SectionProps) =>
        props.props.backgroundPosition};
`;

interface Props {
    mainTitle: string;
    subTitle?: string;
    backgroundImage?: string;
    backgroundPosition?: string;
}

interface SectionProps {
    theme: ThemeContextType;
    props: Props;
}

const TitleSection: React.FC<Props> = (props: Props): JSX.Element => {
    const theme: ThemeContextType = useContext(ThemeContext);
    const sectionProps: SectionProps = { theme, props };

    return (
        <TitleSectionComponent {...sectionProps}>
            <h1>{props.mainTitle}</h1>
            {props.subTitle && <p>{props.subTitle}</p>}
        </TitleSectionComponent>
    );
};

export default TitleSection;
