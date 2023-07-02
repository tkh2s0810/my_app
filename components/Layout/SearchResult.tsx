import React, { useEffect, useState } from "react";
import { AxiosResponse } from "axios";

import SearchInput from "../UI/SerachInput";
import SideResult from "./SideResult";
import StoreDetails from "./StoreDetails";

interface SearchResultProps {
  searchData: AxiosResponse<any, any> | undefined;
  setSerachData: React.Dispatch<
    React.SetStateAction<AxiosResponse<any, any> | undefined>
  >;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  storeDetails: any;
  setStoreDetails: any;
}

const SearchResult: React.FC<SearchResultProps> = ({
  searchData,
  setSerachData,
  isVisible,
  setIsVisible,
  storeDetails,
  setStoreDetails,
}) => {
  return (
    <div className="absolute flex h-full space-x-2 top-1">
      <div className="overflow-auto">
        <SearchInput
          setSerachData={setSerachData}
          setIsVisible={setIsVisible}
        />
        <SideResult searchData={searchData} isVisible={isVisible} />
      </div>
      <StoreDetails
        storeDetails={storeDetails}
        setStoreDetails={setStoreDetails}
      />
    </div>
  );
};

export default SearchResult;
