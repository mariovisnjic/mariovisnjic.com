/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React, { useContext } from 'react';

import { ThemeContext, ThemeContextType } from '../util/themeContext';

const LayoutWrapper = styled.div`
    background: ${(props: ThemeContextType) => props.tertiaryColor};
`;

const Header = styled.div`
    display: flex;
    height: 50px;
    background: ${(props: ThemeContextType) => props.primaryColor};
    align-items: center;
    padding-left: 50px;
    font-size: 22px;
    color: white;
    font-weight: 600;

    a {
        color: white;
        text-decoration: none;
    }
`;

const Content = styled.div`
    background: ${(props: ThemeContextType) => props.tertiaryColor};
    min-height: 80vh;
    min-height: calc(100vh - 121px);
`;

const Footer = styled.div`
    display: flex;
    height: 50px;
    background: ${(props: ThemeContextType) => props.primaryColor};
    align-items: center;
    padding-left: 50px;
    color: white;
    font-weight: 600;
    a {
        color: #ff5a00;
    }
`;

interface Props {
    children: React.ReactNode;
}

const CenteredLayout: React.FC = (props: Props): JSX.Element => {
    const theme: ThemeContextType = useContext(ThemeContext);

    return (
        <LayoutWrapper {...theme}>
            <Header {...theme}>
                <a href="https://mariovisnjic.com">mariovisnjic.com</a>
            </Header>

            <Content {...theme}>{props.children}</Content>

            <Footer {...theme}>
                <p></p>
            </Footer>
        </LayoutWrapper>
    );
};

export default CenteredLayout;
