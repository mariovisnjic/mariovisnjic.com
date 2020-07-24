import styled from '@emotion/styled';
import { NextPage } from 'next';
import React, { useContext, useEffect, useState } from 'react';

import { ThemeContext, ThemeContextType } from '../../util/themeContext';

const EducationWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const School = styled.div`
    display: flex;
    width: 90%;
    min-height: 300px;
    background: linear-gradient(
            to right,
            rgba(${(props: SchoolProps) => props.theme.primaryColorRGB}, 0.6),
            rgba(0, 0, 0, 0)
        ),
        url(${(props: SchoolProps) => props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 30px;
    flex-direction: column;
    align-items: center;
    transition: transform 0.5s;
    transform: scale(${(props: SchoolProps) => (props.didMount ? '1' : '0')});
    text-align: left;
    color: white;
    font-size: 22px;
    align-items: flex-start;
    padding: 20px;

    &:nth-of-type(2) {
        transition-delay: 250ms;
    }
`;

interface Props {
    fakeProp?: string;
}

interface SchoolProps {
    theme: ThemeContextType;
    background: string;
    didMount: boolean;
}

const Education: NextPage<Props> = () => {
    const theme: ThemeContextType = useContext(ThemeContext);
    const [didMount, setDidMount] = useState(false);

    useEffect(() => {
        setTimeout(() => setDidMount(true), 200);
    }, []);

    return (
        <EducationWrap>
            <School
                {...{
                    theme,
                    background:
                        '../../../static/pages/indexPage/school/gimnazija-karlovac.jpg',
                    didMount
                }}
            >
                Gimnazija Karlovac (High School)
                <br />
                2008-2012
                <br />
                <br />- Cinema Club Karlovac
            </School>

            <School
                className="second"
                {...{
                    theme,
                    background:
                        '../../../static/pages/indexPage/school/ekonomski-rijeka.jpg',
                    didMount
                }}
            >
                Faculty of Economics in Rijeka
                <br />
                Marketing major
                <br />
                <br />
                Bachelors Degree 2012-2015
                <br />
                Thesis: External effects of crowdfunding on cryptocurrency
                Dogecoin
                <br />
                <br />
                Masters Degree 2015-2017
                <br />
                Thesis: Analysis of advertising services on the Internet
                <br />
            </School>
        </EducationWrap>
    );
};

export default Education;
