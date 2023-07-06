import React from "react";
import { useRecoilValue } from "recoil";
import { StoreDetailsState } from "../State/StoreDetailState";

import TopImageBox from "../UI/TopImageBox";
import BasicInfoBox from "../UI/BasicInfoBox";
import DetailedInfoBox from "../UI/DetailedInfoBox";
import UserCommentBox from "../UI/UserCommentBox";
import RecommendedShopsBox from "../UI/RecommendedShopsBox";
import UsedInStoreDetailsDivider from "../UI/UsedInStoreDetailsDivider";

import { Box } from "@mui/material";

interface StoreDetailsProps {
  storeDetails: any;
  setStoreDetails: any;
}

const StoreDetails: React.FC<StoreDetailsProps> = ({}) => {
  const { address, phoneNumber, name, website, photos } =
    useRecoilValue(StoreDetailsState);

  return (
    <Box className="bg-gray-100 rounded-xl w-80 h-3/4">
      <TopImageBox photos={photos} name={name} />
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
