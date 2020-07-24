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
        !props.isMobile &&
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

    a {
        color: ${(props: StepPickProps) => props.theme.quaternaryColor};
    }

    @media all and (max-width: 640px) {
        padding: 30px 5px;
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
    isMobile: boolean;
}

const Home: NextPage<Props> = () => {
    const [activeStep, setActiveStep] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 640);
    }, []);

    const theme: ThemeContextType = useContext(ThemeContext);

    const stepPickProps = (stepNumber) => {
        return {
            theme,
            isActive: activeStep === stepNumber,
            isMobile
        };
    };

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
                        {...stepPickProps(1)}
                        onMouseEnter={() => setActiveStep(1)}
                    >
                        <span>1</span>
                        <p>Create note on any page</p>

                        {isMobile && (
                            <img
                                src="../static/pages/chromeNotesExtension/step1.png"
                                alt="step1"
                            />
                        )}
                    </StepPick>

                    <StepPick
                        {...stepPickProps(2)}
                        onMouseEnter={() => setActiveStep(2)}
                    >
                        <span>2</span>
                        <p>
                            Extension will notify you if you have a note on
                            current domain or page
                        </p>

                        {isMobile && (
                            <img
                                src="../static/pages/chromeNotesExtension/step2.png"
                                alt="step2"
                            />
                        )}
                    </StepPick>

                    <StepPick
                        {...stepPickProps(3)}
                        onMouseEnter={() => setActiveStep(3)}
                    >
                        <span>3</span>
                        <p>Icon will be yellow for the same domain</p>

                        {isMobile && (
                            <img
                                src="../static/pages/chromeNotesExtension/step3.png"
                                alt="step3"
                            />
                        )}
                    </StepPick>

                    <StepPick
                        {...stepPickProps(4)}
                        onMouseEnter={() => setActiveStep(4)}
                    >
                        <span>4</span>
                        <p>
                            Red icon and additional highlighting is present if
                            the note is on the exact url
                        </p>

                        {isMobile && (
                            <img
                                src="../static/pages/chromeNotesExtension/step4.png"
                                alt="step4"
                            />
                        )}
                    </StepPick>

                    <StepPick {...stepPickProps(99)}>
                        <p>
                            Download it on{' '}
                            <a href="https://chrome.google.com/webstore/detail/chrome-note-extension/hgogikjgakjonhalnhlmbcggmajhdgli">
                                Chrome web store
                            </a>
                        </p>
                    </StepPick>
                </div>

                <div>
                    {activeStep === 1 && !isMobile && (
                        <img
                            src="../static/pages/chromeNotesExtension/step1.png"
                            alt="step1"
                        />
                    )}

                    {activeStep === 2 && !isMobile && (
                        <img
                            src="../static/pages/chromeNotesExtension/step2.png"
                            alt="step2"
                        />
                    )}

                    {activeStep === 3 && !isMobile && (
                        <img
                            src="../static/pages/chromeNotesExtension/step3.png"
                            alt="step3"
                        />
                    )}

                    {activeStep === 4 && !isMobile && (
                        <img
                            src="../static/pages/chromeNotesExtension/step4.png"
                            alt="step4"
                        />
                    )}
                </div>

                {/*This will preload images and avoid twitchiness when toggling steps*/}
                <HiddenPreload>
                    <img
                        src="../static/pages/chromeNotesExtension/step1.png"
                        alt="step1"
                    />
                    <img
                        src="../static/pages/chromeNotesExtension/step2.png"
                        alt="step2"
                    />
                    <img
                        src="../static/pages/chromeNotesExtension/step3.png"
                        alt="step3"
                    />
                    <img
                        src="../static/pages/chromeNotesExtension/step4.png"
                        alt="step4"
                    />
                </HiddenPreload>
            </StepsWrapper>

            <PageInfoWidget position="top">
                <div>
                    Chrome extension is made with HTML, CSS, JS and Chrome api
                    for controlling tabs, reading URLs and saving notes to user.
                </div>
                <br />
                <a href="https://mariovisnjic.com">
                    <img
                        src="../static/common/home.png"
                        alt="homeIcon"
                        style={{ height: '30px' }}
                    />
                </a>
                <a
                    href="https://github.com/mariovisnjic/chromeNotesExtension"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="../static/common/GitHub-Logo.png"
                        alt="gitHubLogo"
                        style={{ height: '30px', marginLeft: '10px' }}
                    />
                </a>
            </PageInfoWidget>
        </Layout>
    );
};

export default Home;
