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
        background: ${(props: ThemeContextType) => props.primaryColor};
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

    useEffect(() => {
        setTimeout(() => setDidMount(true), 200);
    }, []);

    return (
        <ExperienceWrap>
            <Box {...{ background: '#1d1446', theme, didMount }}>
                <a href="https://kompare.hr/">
                    <img
                        src="../static/pages/indexPage/company/kompare.png"
                        alt="kompare.hr"
                    />
                </a>
                2017 - present
                <ImgWrap>
                    <img
                        src="../static/pages/indexPage/techStack/react.png"
                        alt="react"
                    />
                    <img
                        src="../static/pages/indexPage/techStack/tsjs.png"
                        alt="tsjs"
                    />
                    <img
                        src="../static/pages/indexPage/techStack/node.png"
                        alt="node"
                    />
                    <img
                        src="../static/pages/indexPage/techStack/next.png"
                        alt="next"
                    />
                    <img
                        src="../static/pages/indexPage/techStack/vue.png"
                        alt="vue"
                    />
                    <img
                        src="../static/pages/indexPage/techStack/php.png"
                        alt="php"
                    />
                    <img
                        src="../static/pages/indexPage/techStack/graphql.png"
                        alt="graphql"
                    />
                    <img
                        src="../static/pages/indexPage/techStack/apollo.png"
                        alt="apollo"
                    />
                </ImgWrap>
            </Box>
            <Box {...{ theme, didMount }}>
                <div>
                    <p>Interested? Contact me.</p>

                    <form
                        name="contact"
                        method="post"
                        data-netlify="true"
                        encType="application/x-www-form-urlencoded"
                    >
                        <input type="hidden" name="form-name" value="contact" />

                        <FormInput>
                            <label>
                                Name <br />
                                <input type="text" name="userName" />
                            </label>
                        </FormInput>

                        <FormInput>
                            <label>
                                Email <br />
                                <input type="email" name="email" />
                            </label>
                        </FormInput>

                        <FormInput>
                            <label>
                                Message <br />
                                <textarea cols={32} rows={7} name="message" />
                            </label>
                        </FormInput>

                        <FormSubmit {...theme}>
                            <button type="submit">Send</button>
                        </FormSubmit>
                    </form>
                </div>
            </Box>
        </ExperienceWrap>
    );
};

export default Experience;
