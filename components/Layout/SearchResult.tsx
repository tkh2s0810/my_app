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
    <>
      <div className="absolute top-0 left-0 z-10 flex space-x-2 bg-gray-100 w-96">
        <SearchInput
          setSerachData={setSerachData}
          setIsVisible={setIsVisible}
        />
      </div>
      <div className="absolute top-0 left-0 flex h-full pt-12 space-x-2 ">
        <div className="overflow-x-hidden overflow-y-auto">
          <SideResult searchData={searchData} isVisible={isVisible} />
        </div>
        <StoreDetails
          storeDetails={storeDetails}
          setStoreDetails={setStoreDetails}
        />
      </div>
    </>
  );
};

export default SearchResult;
