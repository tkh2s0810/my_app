import React, { useEffect, useState } from "react";
import { AxiosResponse } from "axios";

import SearchInput from "../UI/SerachInput";
import SideResult from "./SideResult";

import "../../styles/SideResult.css";

interface SearchResultProps {
  searchData: AxiosResponse<any, any> | undefined;
  setSerachData: React.Dispatch<
    React.SetStateAction<AxiosResponse<any, any> | undefined>
  >;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchResult: React.FC<SearchResultProps> = ({
  searchData,
  setSerachData,
  isVisible,
  setIsVisible,
}) => {
  return (
    <div className="absolute flex h-full top-1">
      <div className="overflow-auto">
        <SearchInput
          setSerachData={setSerachData}
          setIsVisible={setIsVisible}
        />
        <SideResult searchData={searchData} isVisible={isVisible} />
      </div>
      <div className="h-16 bg-indigo-700">hogehoge</div>
    </div>
  );
};

export default SearchResult;
