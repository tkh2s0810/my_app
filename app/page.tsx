"use client";

import React from "react";
import { useState } from "react";
import { AxiosResponse } from "axios";

import GoogleMap from "../components/UI/GoogleMap";
import SearchInput from "../components/UI/SerachInput";
import SearchResult from "../components/Layout/SearchResult";

import "../styles/tailwind.css";

const RegistRestaurantArea: React.FC = ({}) => {
  const [searchData, setSerachData] = useState<AxiosResponse>();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <>
      <div className="relative w-screen h-screen overflow-hidden">
        <GoogleMap searchData={searchData} />
        <SearchResult
          searchData={searchData}
          setSerachData={setSerachData}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      </div>
    </>
  );
};

export default RegistRestaurantArea;
