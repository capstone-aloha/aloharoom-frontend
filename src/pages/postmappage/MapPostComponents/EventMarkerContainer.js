import { MapMarker } from 'react-kakao-maps-sdk';
import React, { useState } from "react";
import greenMarker from '../../../img/greenMarker.png';
import blueMarker from '../../../img/blueMarker.png';
import redMarker from '../../../img/redMarker.png';
import { useNavigate } from "react-router-dom";

const EventMarkerContainer = ({
    x,
    y,
    content,
    boardId,
    homeType
}) => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    return (
        <MapMarker
            position={{ lat: x, lng: y}}
            onClick={() => navigate(`../postInfoPage/${boardId}`)}
            onMouseOver={() => setIsVisible(true)}
            onMouseOut={() => setIsVisible(false)}
            image={{
                src:  homeType === 'apartment'
                    ? redMarker
                    : homeType === 'officetel' ? blueMarker : greenMarker,
                size: {
                    width: 40,
                    height: 40,
                },
            }}
        >
            { isVisible && 
                <div 
                    style={{ 
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "black",
                        minWidth: "16vw",
                        padding: "1px"
                    }}
                >
                    {content}
                </div>
            }
        </MapMarker>
    ); 
}

export default EventMarkerContainer;