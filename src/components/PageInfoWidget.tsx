/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React, { useContext } from 'react';

import { ThemeContext, ThemeContextType } from '../util/themeContext';

const WidgetStyle = styled.div`
    background: #fff;
    padding: 0 10px;
    border-radius: 50%;
    border: 2px solid
        ${(props: WidgetStyleProps) => props.theme.quaternaryColor};
    transition: all 0.05s, padding 0s;
    max-width: 150px;

    div {
        display: none;
    }

    span {
        font-family: 'Fugaz One', cursive;
        font-size: 21px;
        color: ${(props: WidgetStyleProps) => props.theme.quaternaryColor};
        font-weight: 600;
    }
`;

//wrapper as box to prevent flicker on hover
const WidgetWrapper = styled.div`
    position: absolute;
    ${(props: WidgetStyleProps) => props.position}: 60px;
    right: 15px;
    ${WidgetStyle}:hover {
        border-radius: 0;
        padding: 20px 15px;

        div {
            display: block;
        }

        span {
            position: absolute;
            ${(props: WidgetStyleProps) => props.position}: 5px;
            right: 10px;
        }
    }
`;

interface Props {
    children: React.ReactNode;
    position: string;
}

interface WidgetStyleProps {
    position: string;
    theme: ThemeContextType;
}

const PageInfoWidget = (props: Props): JSX.Element => {
    const theme: ThemeContextType = useContext(ThemeContext);
    const styleProps: WidgetStyleProps = { position: props.position, theme };

    return (
        <WidgetWrapper {...styleProps}>
            <WidgetStyle {...styleProps}>
                <span>i</span>
                <div>{props.children}</div>
            </WidgetStyle>
        </WidgetWrapper>
    );
};

export default PageInfoWidget;
