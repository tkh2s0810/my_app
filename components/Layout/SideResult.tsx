import React, { useEffect, useState } from "react";
import { AxiosResponse } from "axios";

import ResultItem from "../UI/ResultItem";

import "../../styles/SideResult.css";

interface SideResultAreaProps {
  searchData: AxiosResponse<any, any> | undefined;
  isVisible: boolean;
}

const SideResultArea: React.FC<SideResultAreaProps> = ({
  searchData,
  isVisible,
}) => {
  return (
    <>
      {searchData?.data.results.map((result: any) => {
        return <ResultItem result={result} />;
      })}
    </>
  );
};

export default SideResultArea;
