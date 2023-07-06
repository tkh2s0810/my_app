import React from "react";

import { Typography, Box, Unstable_Grid2 as Grid, Link } from "@mui/material";

import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";

interface DetailedInfoBoxProps {
  address: string;
  phoneNumber: string;
  website: string;
}

const DetailedInfoBox: React.FC<DetailedInfoBoxProps> = ({
  address,
  phoneNumber,
  website,
}) => {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid xs={1}>
          <PlaceRoundedIcon className="text-blue-400" />
        </Grid>
        <Grid xs={11}>
          <Typography variant="body2">{address}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid xs={1}>
          <LocalPhoneRoundedIcon className="text-blue-400" />
        </Grid>
        <Grid xs={11}>
          <Typography variant="body2">{phoneNumber}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid xs={1}>
          <PublicRoundedIcon className="text-blue-400" />
        </Grid>
        <Grid xs={11}>
          <Link href={website} target="_blank" rel="noopener">
            <Typography variant="body2">ホームページ</Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailedInfoBox;
