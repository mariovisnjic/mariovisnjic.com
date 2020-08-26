/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import axios from 'axios';
import getConfig from 'next/config';
import { useEffect, useState } from 'react';
const { publicRuntimeConfig } = getConfig();

const Icon = styled.img`
    height: 35px;
    clip-path: inset(${(props: IconProps) => props.clip}% 0 0 0);
`;

interface MoodResponse {
    success: boolean;
    data: {
        physical: number;
        emotional: number;
        focus: number;
    };
}

interface IconProps {
    clip: number;
}

interface Props {
    limitNumber: number;
}

const AverageMood = (props: Props): JSX.Element | null => {
    const [moodAverage, setMoodAverage] = useState<MoodResponse | undefined>();

    useEffect(() => {
        async function getLatestMood() {
            axios
                .get(
                    `${publicRuntimeConfig.API_URL}/mood/average?limit=${props.limitNumber}`
                )
                .then((response) => setMoodAverage(response.data));
        }
        getLatestMood();
    }, []);

    if (!moodAverage?.success) {
        return null;
    }

    return (
        <a href="/mood-widget">
            <Icon
                src="../static/common/header/emotional.png"
                {...{
                    clip: 100 - moodAverage.data.emotional * 100
                }}
                title={`Emotional: ${moodAverage.data.emotional * 100} %`}
            />
            <Icon
                src="../static/common/header/focus.png"
                {...{
                    clip: 100 - moodAverage.data.focus * 100
                }}
                title={`Focus: ${moodAverage.data.focus * 100} %`}
            />
            <Icon
                src="../static/common/header/physical.png"
                {...{
                    clip: 100 - moodAverage.data.physical * 100
                }}
                title={`Physical: ${moodAverage.data.physical * 100} %`}
            />
        </a>
    );
};

export default AverageMood;
