import styled from '@emotion/styled';
import { NextPage } from 'next';
import React from 'react';

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

const Projects: NextPage = () => {
    return (
        <ProjectsWrapper>
            <ul>
                <a href="https://mariovisnjic.com/chrome-notes-extension">
                    <li>Chrome notes extension</li>
                </a>
            </ul>
        </ProjectsWrapper>
    );
};

export default Projects;
