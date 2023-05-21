import React, { useEffect, useState } from "react";
import { AxiosResponse } from "axios";

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
      {searchData?.data.results.map((result: any) => {})}
      <h1 className={`slide-in ${isVisible ? "visible" : ""}`}>ホゲホゲ</h1>
    </>
  );
};

export default SideResultArea;
