import React from "react";

import { Divider } from "@mui/material";

const BasicInfoBox: React.FC = () => {
  return (
    <Divider
      sx={{
        borderColor: "#D1D5DB",
        marginTop: "8px",
        marginBottom: "8px",
        height: "2px",
      }}
    />
  );
};

export default BasicInfoBox;
