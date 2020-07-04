/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';

const WidgetStyle = styled.div`
    position: absolute;
    ${(props: WidgetStyleProps) => props.position}: 15px;
    right: 15px;
    background: #fff;
    padding: 5px 10px;
    border-radius: 50%;
    border: 2px solid #7bdff2;
    transition: all 0.1s, padding 0s;
    max-width: 150px;

    div {
        display: none;
    }

    span {
        font-family: 'Fugaz One', cursive;
        font-size: 21px;
        color: #7bdff2;
        font-weight: 600;
    }

    &:hover {
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
}

const PageInfoWidget = (props: Props): JSX.Element => {
    return (
        <WidgetStyle {...{ position: props.position }}>
            <span>i</span>
            <div>{props.children}</div>
        </WidgetStyle>
    );
};

export default PageInfoWidget;
