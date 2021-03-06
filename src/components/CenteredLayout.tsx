/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import React, { useContext } from 'react';

import { ThemeContext, ThemeContextType } from '../util/themeContext';
import AverageMood from './AverageMood';

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
    background: ${(props: ThemeContextType) => props.tertiaryColor};
    background-size: cover;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
    background: ${(props: ThemeContextType) => props.primaryColor};
    align-items: center;
    padding: 0 50px;
    font-size: 22px;
    color: white;
    font-weight: 600;

    a {
        color: white;
        text-decoration: none;
    }

    @media all and (max-width: 640px) {
        padding: 0 15px;
    }
`;

const Content = styled.div`
    display: flex;
    margin: 0 auto;
    text-align: center;
    background: ${(props: ThemeContextType) => props.tertiaryColor};
    padding: 20px;
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
                <a href="/">mariovisnjic.com</a>

                <AverageMood limitNumber={15} />
            </Header>

            <Content {...theme}>{props.children}</Content>

            <Footer {...theme} />
        </LayoutWrapper>
    );
};

export default CenteredLayout;
