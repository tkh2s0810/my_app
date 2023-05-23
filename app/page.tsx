"use client";

import React from "react";
import { useState } from "react";
import { AxiosResponse } from "axios";

import GoogleMap from "../components/UI/GoogleMap";
import SearchInput from "../components/UI/SerachInput";
import SideResult from "../components/Layout/SideResult";

import "../styles/tailwind.css";

const RegistRestaurantArea: React.FC = ({}) => {
  const [searchData, setSerachData] = useState<AxiosResponse>();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <>
      <div className="relative">
        <GoogleMap searchData={searchData} />
        <div className="absolute">
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
