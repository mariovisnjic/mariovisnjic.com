import styled from '@emotion/styled';
import axios from 'axios';
import { NextPage } from 'next';
import getConfig from 'next/config';
import Head from 'next/head';
import React, { useContext, useEffect, useState } from 'react';

import Layout from '../components/Layout';
import PageInfoWidget from '../components/PageInfoWidget';
import TitleSection from '../components/TitleSection';
import netlifyAuth from '../netlifyAuth.js';
import { ThemeContext, ThemeContextType } from '../util/themeContext';
const { publicRuntimeConfig } = getConfig();

const DisplayWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 50px 0;
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 50px 0;
`;

const ThumbsHolder = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`;

const Thumbs = styled.img`
    filter: drop-shadow(
        0px 0px 5px
            ${(props: ThumbsProps) =>
                props.isPicked ? props.theme.quaternaryColor : 'transparent'}
    );
    cursor: pointer;
    height: 40px;
    margin-left: 20px;

    &:nth-of-type(1) {
        height: 25px;
    }
    &:nth-of-type(3) {
        height: 30px;
    }
`;

const Login = styled.button`
    background: ${(props: ThemeContextType) => props.quaternaryColor};
    color: white;
    border: 0;
    outline: 0;
    padding: 10px 20px;
    cursor: pointer;
`;

interface Props {
    fakeProp: string;
}

interface ThumbsProps {
    theme: ThemeContextType;
    isPicked: boolean;
}

const MoodWidget: NextPage<Props> = () => {
    const theme: ThemeContextType = useContext(ThemeContext);

    const [physical, setPhysical] = useState(0.5);
    const [emotional, setEmotional] = useState(0.5);
    const [focus, setFocus] = useState(0.5);

    const [password, setPassword] = useState('');
    const [saveMoodResponse, setSaveMoodResponse] = useState();
    const [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);
    const [user, setUser] = useState(null);

    useEffect(() => {
        netlifyAuth.initialize((user) => {
            setLoggedIn(!!user);
        });
    }, [loggedIn]);

    const saveMood = () => {
        axios
            .post(publicRuntimeConfig.API_URL + '/mood/insert', {
                physical: physical,
                emotional: emotional,
                focus: focus,
                day: new Date().getDay(),
                hour: new Date().getHours(),
                fullDate: new Date(),
                password: password
            })
            .then((response) => setSaveMoodResponse(response.data));
    };

    const login = () => {
        netlifyAuth.authenticate((user) => {
            setLoggedIn(!!user);
            setUser(user);
            netlifyAuth.closeModal();
        });
    };

    return (
        <Layout>
            <Head>
                <title>Mario Višnjić | Mood</title>
            </Head>
            <TitleSection
                mainTitle="MOOD"
                backgroundImage="../static/chromeNotesExtension/title.png"
                backgroundPosition="top right"
            />

            <DisplayWrapper>
                <div>
                    <p>Mood widget displays average mood over time.</p>
                    <p>Form is hidden behind Netlify Identity login.</p>
                    <p>
                        More statistics and graphs will be added on this page.
                    </p>
                    <p>
                        Check component on{' '}
                        <a href="https://github.com/mariovisnjic/mariovisnjic.com/blob/master/src/components/AverageMood.tsx">
                            GitHub
                        </a>
                    </p>
                    <p>
                        Check this page on{' '}
                        <a href="https://github.com/mariovisnjic/mariovisnjic.com/blob/master/src/pages/moodWidget.tsx">
                            GitHub
                        </a>
                    </p>

                    {loggedIn ? (
                        <Form>
                            <ThumbsHolder>
                                Physical:
                                <Thumbs
                                    src="../../static/pages/moodWidget/thumbs-down.png"
                                    onClick={() => setPhysical(0)}
                                    {...{ theme, isPicked: physical === 0 }}
                                />
                                <Thumbs
                                    src="../../static/pages/moodWidget/thumbs-middle.png"
                                    onClick={() => setPhysical(0.5)}
                                    {...{ theme, isPicked: physical === 0.5 }}
                                />
                                <Thumbs
                                    src="../../static/pages/moodWidget/thumbs-up.png"
                                    onClick={() => setPhysical(1)}
                                    {...{ theme, isPicked: physical === 1 }}
                                />
                            </ThumbsHolder>
                            <ThumbsHolder>
                                Emotional:
                                <Thumbs
                                    src="../../static/pages/moodWidget/thumbs-down.png"
                                    onClick={() => setEmotional(0)}
                                    {...{ theme, isPicked: emotional === 0 }}
                                />
                                <Thumbs
                                    src="../../static/pages/moodWidget/thumbs-middle.png"
                                    onClick={() => setEmotional(0.5)}
                                    {...{ theme, isPicked: emotional === 0.5 }}
                                />
                                <Thumbs
                                    src="../../static/pages/moodWidget/thumbs-up.png"
                                    onClick={() => setEmotional(1)}
                                    {...{ theme, isPicked: emotional === 1 }}
                                />
                            </ThumbsHolder>
                            <ThumbsHolder>
                                Focus:
                                <Thumbs
                                    src="../../static/pages/moodWidget/thumbs-down.png"
                                    onClick={() => setFocus(0)}
                                    {...{ theme, isPicked: focus === 0 }}
                                />
                                <Thumbs
                                    src="../../static/pages/moodWidget/thumbs-middle.png"
                                    onClick={() => setFocus(0.5)}
                                    {...{ theme, isPicked: focus === 0.5 }}
                                />
                                <Thumbs
                                    src="../../static/pages/moodWidget/thumbs-up.png"
                                    onClick={() => setFocus(1)}
                                    {...{ theme, isPicked: focus === 1 }}
                                />
                            </ThumbsHolder>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                            <button onClick={() => saveMood()}>Save</button>
                            {JSON.stringify(saveMoodResponse)}
                        </Form>
                    ) : (
                        <Login onClick={login} {...theme}>
                            SUBMIT
                        </Login>
                    )}
                </div>
            </DisplayWrapper>

            <PageInfoWidget position="top">
                <div>
                    MongoDB as database, Express.JS with mongoose as API,
                    Netlify indentity for protecting new entries
                </div>
                <br />
                <a href="/">
                    <img
                        src="../static/common/home.png"
                        alt="homeIcon"
                        style={{ height: '30px' }}
                    />
                </a>
                <a
                    href="https://github.com/mariovisnjic/mariovisnjic.com"
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

export default MoodWidget;
