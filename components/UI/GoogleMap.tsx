import React from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
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

  // MapOptionsオブジェクト
  const mapOptions = {
    mapTypeControl: false, // 地図の表示切り替えボタンを非表示
    streetViewControl: false, // ストリートビュー表示切り替えボタンを非表示
    zoomControl: false, // ズームコントロールを非表示にする
  };

  // マップの中心座標
  const center = {
    lat: 35.6895, // 緯度
    lng: 139.6917, // 経度
  };

  const GOOGLE_PLACE_DETAILS_URL =
    "http://localhost:3000/api/places/details/json";

  const showDetail = (placeId: string) => {
    const options: AxiosRequestConfig = {
      url: GOOGLE_PLACE_DETAILS_URL,
      method: "GET",
      params: {
        place_id: placeId,
        key: process.env.NEXT_PUBLIC_API_KEY,
      },
    };
    axios(options)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_API_KEY as string}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={searchData?.data.results[0].geometry.location ?? center}
        options={mapOptions}
        zoom={15}
      >
        {searchData?.data.results.map((markerLoc: any) => {
          return (
            <>
              <Marker
                position={markerLoc.geometry.location}
                onClick={() => showDetail(markerLoc.place_id)}
                key={markerLoc.place_id}
              />
              {/* <InfoWindow position={markerLoc.geometry.location}>
                <div>
                  <h3>Infowindow Content</h3>
                  <p>Any information you want to display here.</p>
                </div>
              </InfoWindow> */}
            </>
          );
        })}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapArea;
