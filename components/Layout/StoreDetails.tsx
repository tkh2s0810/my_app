import React from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { StoreDetailsState } from "../State/StoreDetailState";

import TopImageBox from "../UI/TopImageBox";
import BasicInfoBox from "../UI/BasicInfoBox";
import DetailedInfoBox from "../UI/DetailedInfoBox";
import UserCommentBox from "../UI/UserCommentBox";
import RecommendedShopsBox from "../UI/RecommendedShopsBox";
import UsedInStoreDetailsDivider from "../UI/UsedInStoreDetailsDivider";

import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

import { Box, IconButton } from "@mui/material";

interface StoreDetailsProps {
  storeDetails: any;
  setStoreDetails: any;
}

const StoreDetails: React.FC<StoreDetailsProps> = ({}) => {
  const { address, phoneNumber, name, website, photos } =
    useRecoilValue(StoreDetailsState);

  const resetMyAtom = useResetRecoilState(StoreDetailsState);

  return (
    <Box className="bg-gray-100 rounded-xl w-80 h-3/4">
      <Box className="relative">
        <TopImageBox photos={photos} name={name} />
        <IconButton
          className="absolute text-white top-1 right-1"
          onClick={resetMyAtom}
        >
          <CancelRoundedIcon />
        </IconButton>
      </Box>
      <BasicInfoBox name={name} />
      <UsedInStoreDetailsDivider />
      <DetailedInfoBox
        address={address}
        phoneNumber={phoneNumber}
        website={website}
      />
      <UsedInStoreDetailsDivider />
      <UserCommentBox />
      <UsedInStoreDetailsDivider />
      <RecommendedShopsBox />
    </Box>
  );
};

export default StoreDetails;
