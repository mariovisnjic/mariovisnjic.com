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
    align-items: center;
    max-width: 300px;
    ${(props: StepPickProps) =>
        props.isActive &&
        'box-shadow: 0px 0px 5px 1px rgb(' +
            props.theme.quaternaryColorRGB +
            ')'};
    margin: 0 10px 10px;
    transition: all 0.5s;

    span {
        font-size: 20px;
        border: 1px solid
            ${(props: StepPickProps) => props.theme.quaternaryColor};
        border-radius: 50%;
        padding: 2px 8px;
    }

    p {
        margin: 0 10px;
    }

    img {
        width: 100%;
    }

    @media all and (max-width: 640px) {
        padding: 30px;
        flex-direction: column;
        max-width: 100%;
    }
`;

const StepsWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px 0;
`;

const HiddenPreload = styled.div`
    display: none;
    opacity: 0;
    visibility: 0;
`;

interface Props {
    fakeProp: string;
}

interface StepPickProps {
    theme: ThemeContextType;
    isActive: boolean;
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
            <TitleSection
                mainTitle="CHROME NOTES EXTENSION"
                backgroundImage="../static/chromeNotesExtension/title.png"
                backgroundPosition="top right"
            />

            <StepsWrapper>
                <div>
                    <StepPick
                        {...{ theme, isActive: showSection === 1 }}
                        onMouseEnter={() => setShowSection(1)}
                    >
                        <span>1</span>
                        <p>Create note on any page</p>

                        {isMobile && (
                            <img src="../static/chromeNotesExtension/step1.png" />
                        )}
                    </StepPick>

                    <StepPick
                        {...{ theme, isActive: showSection === 2 }}
                        onMouseEnter={() => setShowSection(2)}
                    >
                        <span>2</span>
                        <p>
                            Extension will notify you if you have a note on
                            current domain or page
                        </p>

                        {isMobile && (
                            <img src="../static/chromeNotesExtension/step2.png" />
                        )}
                    </StepPick>

                    <StepPick
                        {...{ theme, isActive: showSection === 3 }}
                        onMouseEnter={() => setShowSection(3)}
                    >
                        <span>3</span>
                        <p>Icon will be yellow for same domain</p>

                        {isMobile && (
                            <img src="../static/chromeNotesExtension/step3.png" />
                        )}
                    </StepPick>

                    <StepPick
                        {...{ theme, isActive: showSection === 4 }}
                        onMouseEnter={() => setShowSection(4)}
                    >
                        <span>4</span>
                        <p>
                            Red icon and additional highlighting is present if
                            note is on exact url
                        </p>

                        {isMobile && (
                            <img src="../static/chromeNotesExtension/step4.png" />
                        )}
                    </StepPick>
                </div>

                <div>
                    {showSection === 1 && !isMobile && (
                        <img src="../static/chromeNotesExtension/step1.png" />
                    )}

                    {showSection === 2 && !isMobile && (
                        <img src="../static/chromeNotesExtension/step2.png" />
                    )}

                    {showSection === 3 && !isMobile && (
                        <img src="../static/chromeNotesExtension/step3.png" />
                    )}

                    {showSection === 4 && !isMobile && (
                        <img src="../static/chromeNotesExtension/step4.png" />
                    )}
                </div>

                {/*This will preload images and avoid twitchiness when toggling steps*/}
                <HiddenPreload>
                    <img src="../static/chromeNotesExtension/step1.png" />
                    <img src="../static/chromeNotesExtension/step2.png" />
                    <img src="../static/chromeNotesExtension/step3.png" />
                    <img src="../static/chromeNotesExtension/step4.png" />
                </HiddenPreload>
            </StepsWrapper>

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
