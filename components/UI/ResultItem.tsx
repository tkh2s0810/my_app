import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

import { StoreDetailsState } from "../State/StoreDetailState";

import {
  Rating,
  Typography,
  Unstable_Grid2 as Grid,
  IconButton,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

interface ResultItemProps {
  result: any;
}

const ResultItem: React.FC<ResultItemProps> = ({ result }) => {
  const [details, setDetails] = useRecoilState(StoreDetailsState);

  const photoReference = result.photos?.[0].photo_reference;
  const maxWidth = 400;
  const maxHeight = 300;

  const imageUrl = `https://maps.googleapis.com/maps/api/place/photo?key=${process.env.NEXT_PUBLIC_API_KEY}&photoreference=${photoReference}&maxwidth=${maxWidth}&maxheight=${maxHeight}`;
  const detailsUrl = `http://localhost:3000/api/places/details/json`;

  const searchDetails = (e: any) => {
    const placeId = e.currentTarget.getAttribute("data-placeId");

    const options: AxiosRequestConfig = {
      url: detailsUrl,
      method: "GET",
      params: {
        key: process.env.NEXT_PUBLIC_API_KEY,
        place_id: placeId,
      },
    };

    axios(options)
      .then((response) => {
        console.log(response.data);
        const result = response.data.result;
        setDetails({
          address: result.formatted_address.replace(/^日本、/, ""),
          phoneNumber: result.formatted_phone_number,
          name: result.name,
          website: result.website,
          photos: result.photos,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div
        onClick={searchDetails}
        className="bg-gray-100 border-double w-96"
        data-placeId={result.place_id}
      >
        <Grid container spacing={1}>
          <Grid xs={6}>
            <Typography variant="subtitle1">{result.name}</Typography>
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />
            <Grid container spacing={1}>
              <IconButton className="text-green-300">
                <CheckCircleRoundedIcon />
              </IconButton>
              <IconButton className="text-red-300">
                <FavoriteRoundedIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Grid xs={6}>
            <div className="w-48 h-32">
              <img
                src={imageUrl}
                alt={result.name}
                className="object-cover w-full h-full rounded-xl"
              />
            </div>
          </Grid>
        </Grid>
        <Typography variant="body2">
          生ハムが美味しいお店。また行きたい😍
        </Typography>
      </div>
    </>
  );
};

export default ResultItem;
