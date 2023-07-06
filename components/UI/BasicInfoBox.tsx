import React from "react";

import {
  Rating,
  Typography,
  Box,
  Unstable_Grid2 as Grid,
  IconButton,
} from "@mui/material";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

interface BasicInfoBoxProps {
  name: string;
}

const BasicInfoBox: React.FC<BasicInfoBoxProps> = ({ name }) => {
  return (
    <Box>
      <Typography variant="h6">{name}</Typography>
      <Grid container spacing={1}>
        <Grid xs={1}>
          <Typography>4.5</Typography>
        </Grid>
        <Grid xs={11}>
          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />
        </Grid>
      </Grid>
      <Grid container>
        <Typography variant="body2">#美味しいランチ</Typography>
        <Typography variant="body2">#素敵なランチ</Typography>
      </Grid>
      <Grid container>
        <IconButton className="text-green-300">
          <CheckCircleRoundedIcon />
        </IconButton>
        <IconButton className="text-red-300">
          <FavoriteRoundedIcon />
        </IconButton>
      </Grid>
    </Box>
  );
};

export default BasicInfoBox;
