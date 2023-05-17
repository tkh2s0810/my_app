"use client";

import React from "react";
import { useState } from "react";
import { AxiosResponse } from "axios";

import GoogleMapArea from "./components/Area/GoogleMapArea";
import SearchInputArea from "./components/Area/SerachInputArea";

const RegistRestaurantArea: React.FC = ({}) => {
  const [searchData, setSerachData] = useState<AxiosResponse>();

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <GoogleMapArea searchData={searchData} />
      <div style={{ position: "absolute", top: "20px", left: "10px" }}>
        <SearchInputArea setSerachData={setSerachData} />
      </div>
    </div>
  );
};

export default RegistRestaurantArea;
