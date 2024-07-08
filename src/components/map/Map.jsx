import React from "react"
import GoogleMaps from "../google-maps/Google-maps"

export default class Maps extends Component {   
    render() {
        return (
            <div className="map-container">
                <GoogleMaps
                style={{ height: "500px", width: "370px" }}
                zoom={10}
                center={{
                    lat: 0.423765,
                    lng: -1.664428,
                }}
                />
            </div>
        );
    }
}


