"use client";

import React from "react";
import { useState } from "react";
import { AxiosResponse } from "axios";

import GoogleMap from "../components/UI/GoogleMap";
import SearchInput from "../components/UI/SerachInput";
import SideResult from "../components/UI/SideResult";

const RegistRestaurantArea: React.FC = ({}) => {
  const [searchData, setSerachData] = useState<AxiosResponse>();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <>
      <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
        <GoogleMap searchData={searchData} />
        <div style={{ position: "absolute", top: "20px", left: "10px" }}>
          <SearchInput
            setSerachData={setSerachData}
            setIsVisible={setIsVisible}
          />
          <SideResult searchData={searchData} isVisible={isVisible} />
        </div>
      </div>
    </>
  );
};

export default RegistRestaurantArea;
