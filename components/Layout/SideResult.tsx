import React, { useEffect, useState } from "react";
import { AxiosResponse } from "axios";

import ResultItem from "../UI/ResultItem";

import { Divider } from "@mui/material";

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
    <div className="bg-gray-100 w-96">
      {searchData?.data.results.map((result: any) => {
        return (
          <>
            <ResultItem result={result} />
            <Divider
              sx={{
                borderColor: "#D1D5DB",
                marginTop: "8px",
                marginBottom: "8px",
                height: "2px",
              }}
            />
          </>
        );
      })}
    </div>
  );
};

export default SideResultArea;
