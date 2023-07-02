import React from "react";
import { useRecoilValue } from "recoil";

import { StoreDetailsState } from "../State/StoreDetailState";

import {
  Avatar,
  Rating,
  Typography,
  Unstable_Grid2 as Grid,
  Link,
  Divider,
  IconButton,
} from "@mui/material";

import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

interface StoreDetailsProps {
  storeDetails: any;
  setStoreDetails: any;
}

const StoreDetails: React.FC<StoreDetailsProps> = ({}) => {
  const { address, phoneNumber, name, website, photos } =
    useRecoilValue(StoreDetailsState);

  const photoReference = photos[0]?.photo_reference;
  const maxWidth = 400;
  const maxHeight = 300;

  const imageUrl = `https://maps.googleapis.com/maps/api/place/photo?key=${process.env.NEXT_PUBLIC_API_KEY}&photoreference=${photoReference}&maxwidth=${maxWidth}&maxheight=${maxHeight}`;

  return (
    <div className="bg-gray-100 rounded-xl w-80 h-3/4">
      <div className="h-52">
        <img
          src={imageUrl}
          alt={name}
          className="object-cover w-full h-full rounded-t-xl"
        />
      </div>
      <div>
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
      </div>
      <Divider
        sx={{
          borderColor: "#D1D5DB",
          marginTop: "8px",
          marginBottom: "8px",
          height: "2px",
        }}
      />
      <div>
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
      </div>
      <Divider
        sx={{
          borderColor: "#D1D5DB",
          marginTop: "8px",
          marginBottom: "8px",
          height: "2px",
        }}
      />
      <div>
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
      </div>
      <Divider
        sx={{
          borderColor: "#D1D5DB",
          marginTop: "8px",
          marginBottom: "8px",
          height: "2px",
        }}
      />
      <div>
        <Grid container spacing={1}>
          <Grid xs={4}>
            <div className="w-24 h-16">
              <img
                src={imageUrl}
                alt={name}
                className="object-cover w-full h-full rounded-xl"
              />
              <Typography variant="body2">美味しいお店</Typography>
            </div>
          </Grid>
          <Grid xs={4}>
            <div className="w-24 h-16">
              <img
                src={imageUrl}
                alt={name}
                className="object-cover w-full h-full rounded-xl"
              />
              <Typography variant="body2">まあまあなお店</Typography>
            </div>
          </Grid>
          <Grid xs={4}>
            <div className="w-24 h-16">
              <img
                src={imageUrl}
                alt={name}
                className="object-cover w-full h-full rounded-xl"
              />
              <Typography variant="body2">まずいお店</Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default StoreDetails;
