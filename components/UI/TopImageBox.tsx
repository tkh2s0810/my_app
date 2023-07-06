import React from "react";

import { Box, Unstable_Grid2 as Grid } from "@mui/material";

interface TopImageBoxProps {
  photos: any;
  name: string;
}

const TopImageBox: React.FC<TopImageBoxProps> = ({ photos, name }) => {
  const photoReference = photos[0]?.photo_reference;
  const maxWidth = 400;
  const maxHeight = 300;

  const imageUrl = `https://maps.googleapis.com/maps/api/place/photo?key=${process.env.NEXT_PUBLIC_API_KEY}&photoreference=${photoReference}&maxwidth=${maxWidth}&maxheight=${maxHeight}`;

  return (
    <Box className="h-52">
      <img
        src={imageUrl}
        alt={name}
        className="object-cover w-full h-full rounded-t-xl"
      />
    </Box>
  );
};

export default TopImageBox;
