import styled from '@emotion/styled';
import { NextPage } from 'next';
import React, { useContext, useState } from 'react';

import CenteredLayout from '../components/CenteredLayout';
import About from '../components/indexPage/About';
import Education from '../components/indexPage/Education';
import Experience from '../components/indexPage/Experience';
import Projects from '../components/indexPage/Projects';
import PageInfoWidget from '../components/PageInfoWidget';
import { ThemeContext, ThemeContextType } from '../util/themeContext';

const MainWrap = styled.div`
    display: flex;
    min-width: 800px;
    align-items: center;
`;

const TogglerWrapper = styled.div`
    width: 110px;
`;

const Toggler = styled.div`
    background: ${(props: ThemeContextType) => props.secondaryColor};
    cursor: pointer;
    color: white;
    padding: 10px;
    box-shadow: inset 0 -8px 10px -10px #000000;
    transition: all 0.2s;
    position: relative;
    top: -5px;
    left: -5px;
    margin-bottom: 10px;

    &:active {
        top: 0;
        left: 0;
    }
`;

const DisplayWrapper = styled.div``;

const SectionDisplay = styled.div``;

interface Props {
    fakeProp: string;
}

const sectionsNames = ['ABOUT', 'EXPERIENCE', 'EDUCATION', 'PROJECTS'];

const sectionComponents = {
    ABOUT: <About />,
    EXPERIENCE: <Experience />,
    EDUCATION: <Education />,
    PROJECTS: <Projects />
};

const Home: NextPage<Props> = () => {
    const [selectedSection, setSelectedSection] = useState('ABOUT');
    const theme: ThemeContextType = useContext(ThemeContext);

    return (
        <CenteredLayout>
            <MainWrap>
                <TogglerWrapper {...theme}>
                    {sectionsNames.map((section, i) => (
                        <Toggler
                            {...theme}
                            key={i}
                            onClick={() => setSelectedSection(section)}
                        >
                            {section}
                        </Toggler>
                    ))}
                </TogglerWrapper>

                <DisplayWrapper {...theme}>
                    {sectionComponents[selectedSection]}
                </DisplayWrapper>

                <PageInfoWidget position="top">
                    <div>
                        This page is made and statically generated with Next.js.
                        Hosted on Netlify
                    </div>
                    <br />
                    <a href="https://mariovisnjic.com">
                        <img
                            src="../static/home.png"
                            style={{ height: '30px' }}
                        />
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
            </MainWrap>
        </CenteredLayout>
    );
};

export default Home;
