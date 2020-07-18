import styled from '@emotion/styled';
import { NextPage } from 'next';
import React, { useContext, useEffect, useState } from 'react';

import { ThemeContext, ThemeContextType } from '../../util/themeContext';

const ExperienceWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media all and (max-width: 640px) {
        flex-direction: column;
    }
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 350px;
    min-height: 350px;
    background: ${(props: BoxProps) =>
        props.background ? props.background : props.theme.quinaryColor};
    margin-bottom: 30px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 22px;
    padding: 20px;
    margin-left: 30px;
    transition: transform 0.8s, opacity 0.8s;
    transform: translate(
        ${(props: BoxProps) => (props.didMount ? '0, 0' : '-50px, 0')}
    );
    opacity: ${(props: BoxProps) => (props.didMount ? '1' : '0')};

    &:nth-of-type(2) {
        transition-delay: 450ms;
    }

    a {
        width: 100%;
        img {
            height: 30px;
        }
    }

    @media all and (max-width: 640px) {
        max-width: unset;
        margin-left: unset;
    }
`;

const FormInput = styled.div`
    margin: 10px 0;
    input {
        width: 100%;
        height: 30px;
    }

    textarea {
        width: 100%;
    }
`;

const FormSubmit = styled.div`
    button {
        color: white;
        height: 30px;
        width: 100px;
        font-size: 16px;
        border-radius: 4px;
        background: ${(props: ThemeContextType) => props.secondaryColor};
    }
`;

const ImgWrap = styled.div`
    background: rgba(255, 255, 255, 0.3);
    padding: 10px 0;
    margin: 10px 0;
    border-radius: 2px;

    img {
        height: 40px;
        margin: 5px;
    }
`;

interface Props {
    fakeProp?: string;
}

interface BoxProps {
    background?: string;
    didMount: boolean;
    theme: ThemeContextType;
}

const Experience: NextPage<Props> = () => {
    const theme: ThemeContextType = useContext(ThemeContext);
    const [didMount, setDidMount] = useState(false);
    const [name, nameChange] = useState('');
    const [email, emailChange] = useState('');
    const [message, messageChange] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        setTimeout(() => setDidMount(true), 200);
    }, []);

    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    '=' +
                    encodeURIComponent(data[key])
            )
            .join('&');
    };

    const handleSubmit = () => {
        setFormSubmitted(true);
        /*
        e.preventDefault();

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': 'contact',
                ...{ name, email, message }
            })
        })
            .then(() => )
            .catch((error) => alert(error));*/
    };

    return (
        <ExperienceWrap>
            <Box {...{ background: '#1d1446', theme, didMount }}>
                <a href="https://kompare.hr/">
                    <img
                        src="../static/indexPage/kompare.png"
                        alt="kompare.hr"
                    />
                </a>
                2017 - present
                <ImgWrap>
                    <img
                        src="../static/indexPage/techStack/react.png"
                        alt="react"
                    />
                    <img
                        src="../static/indexPage/techStack/tsjs.png"
                        alt="tsjs"
                    />
                    <img
                        src="../static/indexPage/techStack/node.png"
                        alt="node"
                    />
                    <img
                        src="../static/indexPage/techStack/next.png"
                        alt="next"
                    />
                    <img
                        src="../static/indexPage/techStack/vue.png"
                        alt="vue"
                    />
                    <img
                        src="../static/indexPage/techStack/php.png"
                        alt="php"
                    />
                    <img
                        src="../static/indexPage/techStack/graphql.png"
                        alt="graphql"
                    />
                    <img
                        src="../static/indexPage/techStack/apollo.png"
                        alt="apollo"
                    />
                </ImgWrap>
            </Box>
            <Box {...{ theme, didMount }}>
                {!formSubmitted ? (
                    <div>
                        <p>Interested? Contact me.</p>

                        <form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            netlify-honeypot="bot-field"
                            action="#"
                            onSubmit={(e) => handleSubmit(e)}
                        >
                            <label style={{ display: 'none' }}>
                                Don’t fill this out if you&apos;re human:{' '}
                                <input name="bot-field" hidden />
                            </label>
                            <FormInput>
                                <label>
                                    Name <br />
                                    <input
                                        type="text"
                                        name="name"
                                        value={name}
                                        onChange={(e) =>
                                            nameChange(e.target.value)
                                        }
                                    />
                                </label>
                            </FormInput>
                            <FormInput>
                                <label>
                                    Email <br />
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) =>
                                            emailChange(e.target.value)
                                        }
                                    />
                                </label>
                            </FormInput>
                            <FormInput>
                                <label>
                                    Message <br />
                                    <textarea
                                        cols={32}
                                        rows={7}
                                        name="message"
                                        value={message}
                                        onChange={(e) =>
                                            messageChange(e.target.value)
                                        }
                                    />
                                </label>
                            </FormInput>
                            <FormSubmit {...theme}>
                                <button type="submit">Send</button>
                            </FormSubmit>
                        </form>
                    </div>
                ) : (
                    'Thanks for filling in the form. I will contact you soon.'
                )}
            </Box>
        </ExperienceWrap>
    );
};

export default Experience;
