import styled from '@emotion/styled';
import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';

const ProjectsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;

    li {
        margin-top: 20px;
        text-align: left;
    }
`;

const Project = styled.a`
    position: relative;
    font-size: 22px;

    &:nth-of-type(${(props: ProjectProps) => props._id}) {
        li {
            position: relative;
            margin-top: 20px;
            text-align: left;
            right: ${(props: ProjectProps) =>
                props.didMount ? '0px' : '-30px'};
            opacity: ${(props: ProjectProps) => (props.didMount ? '1' : '0')};
            transition: opacity 0.5s, right 1s;
            transition-delay: ${(props: ProjectProps) => props._id * 200}ms;
        }
    }
`;

const PROJECTS = [
    {
        _id: 1,
        url: '/chrome-notes-extension',
        description: 'Chrome extension that lets you save notes for any website'
    },
    {
        _id: 2,
        url: '/express-rest-api',
        description: 'Serverless Express.js REST API connected to MongoDB'
    },
    {
        _id: 3,
        url: '/mood-widget',
        description: 'Widget that displays average mood'
    }
];

interface ProjectProps {
    _id: number;
    didMount: boolean;
}

const Projects: NextPage = () => {
    const [didMount, setDidMount] = useState(false);

    useEffect(() => {
        setTimeout(() => setDidMount(true), 200);
    }, []);

    return (
        <ProjectsWrapper>
            <ul>
                {PROJECTS.map((project, i) => (
                    <Project
                        href={project.url}
                        key={i}
                        {...{ didMount, _id: project._id }}
                    >
                        <li>{project.description}</li>
                    </Project>
                ))}
            </ul>
        </ProjectsWrapper>
    );
};

export default Projects;
