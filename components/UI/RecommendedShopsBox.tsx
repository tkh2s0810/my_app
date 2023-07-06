import React from "react";
import { useRecoilValue } from "recoil";
import { StoreDetailsState } from "../State/StoreDetailState";

import { Typography, Box, Unstable_Grid2 as Grid } from "@mui/material";

const RecommendedShopsBox: React.FC = ({}) => {
  const { name, photos } = useRecoilValue(StoreDetailsState);

  const photoReference = photos[0]?.photo_reference;
  const maxWidth = 400;
  const maxHeight = 300;

  const imageUrl = `https://maps.googleapis.com/maps/api/place/photo?key=${process.env.NEXT_PUBLIC_API_KEY}&photoreference=${photoReference}&maxwidth=${maxWidth}&maxheight=${maxHeight}`;

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid xs={4}>
          <Box className="w-24 h-16">
            <img
              src={imageUrl}
              alt={name}
              className="object-cover w-full h-full rounded-xl"
            />
            <Typography variant="body2">美味しいお店</Typography>
          </Box>
        </Grid>
        <Grid xs={4}>
          <Box className="w-24 h-16">
            <img
              src={imageUrl}
              alt={name}
              className="object-cover w-full h-full rounded-xl"
            />
            <Typography variant="body2">まあまあなお店</Typography>
          </Box>
        </Grid>
        <Grid xs={4}>
          <Box className="w-24 h-16">
            <img
              src={imageUrl}
              alt={name}
              className="object-cover w-full h-full rounded-xl"
            />
            <Typography variant="body2">まずいお店</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RecommendedShopsBox;
