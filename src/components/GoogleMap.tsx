import GoogleMapReact from 'google-map-react';
import getConfig from 'next/config';
import React from 'react';

import GoogleMapPin from './GoogleMapPin';
const { publicRuntimeConfig } = getConfig();

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
}: GoogleMapProps): JSX.Element => (
    <div className="map">
        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: publicRuntimeConfig.GOOGLE_MAPS_API_KEY
                }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                <GoogleMapPin lng={location.lng} lat={location.lat} />
            </GoogleMapReact>
        </div>
    </div>
);

export default GoogleMap;
