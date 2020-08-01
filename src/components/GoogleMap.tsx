import styled from '@emotion/styled';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import getConfig from 'next/config';
import React, { useEffect, useState } from 'react';

import GoogleMapPin from './GoogleMapPin';

const { publicRuntimeConfig } = getConfig();

const Map = styled.div`
    width: 100%;
    height: 400px;

    .pin {
        width: 30px;
        height: 30px;
        position: relative;
        left: -10px;
        top: -25px;
    }

    .pin img {
        width: 100%;
    }
`;

interface GoogleMapProps {
    location: {
        address: string;
        lat: number;
        lng: number;
    };
    zoomLevel: number;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
    location,
    zoomLevel
}: GoogleMapProps): JSX.Element => {
    const [key, setKey] = useState('');
    useEffect(() => {
        async function fetchApiKey() {
            axios
                .get(
                    publicRuntimeConfig.API_URL +
                        '/.netlify/functions/api/google-map-api-key'
                )
                .then((response) => setKey(response.data));
        }
        fetchApiKey();
    }, []);

    return (
        <Map>
            {key ? (
                <GoogleMapReact
                    bootstrapURLKeys={{ key }}
                    defaultCenter={location}
                    defaultZoom={zoomLevel}
                >
                    <GoogleMapPin lng={location.lng} lat={location.lat} />
                </GoogleMapReact>
            ) : (
                'Map is not fetched properly'
            )}
        </Map>
    );
};

export default GoogleMap;
