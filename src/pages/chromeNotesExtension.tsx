import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import React, { useContext, useEffect, useState } from 'react';

import Layout from '../components/Layout';
import PageInfoWidget from '../components/PageInfoWidget';
import TitleSection from '../components/TitleSection';
import { ThemeContext, ThemeContextType } from '../util/themeContext';

const StepPick = styled.div`
    padding: 15px;
    display: flex;

    span {
        font-size: 20px;
        border: 1px solid ${(props: ThemeContextType) => props.quaternaryColor};
        border-radius: 50%;
        padding: 2px 8px;
    }
`;

interface Props {
    fakeProp: string;
}

const Home: NextPage<Props> = () => {
    const [showSection, setShowSection] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 640);
    }, []);

    const theme: ThemeContextType = useContext(ThemeContext);

    return (
        <Layout>
            <TitleSection mainTitle="CHROME NOTES EXTENSION" />

            <StepPick {...theme} onMouseEnter={() => setShowSection(1)}>
                <span>1</span>
            </StepPick>

            <StepPick {...theme} onMouseEnter={() => setShowSection(2)}>
                <span>2</span>
            </StepPick>

            <StepPick {...theme} onMouseEnter={() => setShowSection(3)}>
                <span>3</span>
            </StepPick>

            <StepPick {...theme} onMouseEnter={() => setShowSection(4)}>
                <span>4</span>
            </StepPick>

            {(showSection === 1 || isMobile) && (
                <img src="https://i.pinimg.com/originals/fc/ca/fa/fccafa6ce178ac8c1499abff6483a131.gif" />
            )}

            {(showSection === 2 || isMobile) && (
                <img src="https://media2.giphy.com/media/u00BUvSb3L5cIQHhjw/giphy.gif" />
            )}

            {(showSection === 3 || isMobile) && (
                <img src="https://thumbs.gfycat.com/HealthyFrenchGhostshrimp-size_restricted.gif" />
            )}

            {(showSection === 4 || isMobile) && (
                <img src="https://media3.giphy.com/media/d1E1szXDsHUs3WvK/giphy.gif" />
            )}

            <PageInfoWidget position="top">
                <div>
                    This page is made and statically generated with Next.js.
                    Hosted on Netlify
                </div>
                <br />
                <a href="https://mariovisnjic.com">
                    <img src="../static/home.png" style={{ height: '30px' }} />
                </a>
                <a
                    href="https://github.com/mariovisnjic/mariovisnjic.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="../static/GitHub-Logo.png"
                        style={{ height: '30px', marginLeft: '10px' }}
                    />
                </a>
            </PageInfoWidget>
        </Layout>
    );
};

export default Home;
