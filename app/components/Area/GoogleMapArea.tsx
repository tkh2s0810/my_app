import React from "react";
import { AxiosResponse } from "axios";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

interface GoogleMapAreaProps {
  searchData: AxiosResponse<any, any> | undefined;
}

const GoogleMapArea: React.FC<GoogleMapAreaProps> = ({ searchData }) => {
  const mapContainerStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
  };

  // マップの中心座標
  const center = {
    lat: 35.6895, // 緯度
    lng: 139.6917, // 経度
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_API_KEY as string}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={searchData?.data.results[0].geometry.location ?? center}
        zoom={10}
      >
        {searchData?.data.results.map((markerLoc: any) => {
          return (
            <>
              <Marker position={markerLoc.geometry.location} />
              <InfoWindow position={markerLoc.geometry.location}>
                <div>
                  <h3>Infowindow Content</h3>
                  <p>Any information you want to display here.</p>
                </div>
              </InfoWindow>
            </>
          );
        })}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapArea;
