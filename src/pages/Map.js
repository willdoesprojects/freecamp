import { useRef, useEffect, useState} from 'react';
import ReactMapGL from 'react-map-gl';

import "./map.css"




function Map() {
    const [viewport, setViewport] = useState({
        latitude: 38.895037,
        longitude: -77.036543,
        width: '100vw',
        height: '100vh',
        zoom: 10
    });

    return (
        <div className='map'>
            <ReactMapGL {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}>
            </ReactMapGL>
        </div>
    );
}

export default Map;