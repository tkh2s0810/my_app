import React from "react";

import { Avatar, Typography, Box, Unstable_Grid2 as Grid } from "@mui/material";

const UserCommentBox: React.FC = ({}) => {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid xs={1}>
          <Avatar
            alt="hachiware"
            src="/Images/hachiware.jpeg"
            sx={{ width: 24, height: 24 }}
          />
        </Grid>
        <Grid xs={11}>
          <Typography variant="body2">
            ピザがおいしい。また行きたい。
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid xs={1}>
          <Avatar
            alt="usagi"
            src="/Images/usagi.png"
            sx={{ width: 24, height: 24 }}
          />
        </Grid>
        <Grid xs={11}>
          <Typography variant="body2">
            飲み物の種類が豊富。日本酒あり。
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserCommentBox;
