import { useState } from "react";
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from "@vis.gl/react-google-maps";

export default function () {
    const position = { lat: 53.54, lng: 10 };

    return <APIProvider><div>Map</div></APIProvider>
}