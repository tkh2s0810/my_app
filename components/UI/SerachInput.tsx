import React from "react";
import { useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { TextField, Button, Unstable_Grid2 as Grid } from "@mui/material";

interface SearchInputProps {
  setSerachData: React.Dispatch<
    React.SetStateAction<AxiosResponse<any, any> | undefined>
  >;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchInputArea: React.FC<SearchInputProps> = ({
  setSerachData,
  setIsVisible,
}) => {
  const GOOGLE_TEXT_SEARCH_URL =
    "http://localhost:3000/api/places/textsearch/json";

  const [searchInput, setSearchInput] = useState<string>();

  const doSearch = () => {
    const options: AxiosRequestConfig = {
      url: GOOGLE_TEXT_SEARCH_URL,
      method: "GET",
      params: {
        key: process.env.NEXT_PUBLIC_API_KEY,
        query: searchInput,
      },
    };
    searchInput &&
      axios(options)
        .then((response) => {
          setSerachData(response);
          setIsVisible(true);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  };
  return (
    <Grid container spacing={1} className="bg-gray-100 w-96">
      <Grid xs={8}>
        <TextField
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchInput(e.target.value);
          }}
          id="standard-basic"
          label="Search Word"
          variant="standard"
        />
      </Grid>
      <Grid xs={4}>
        <Button onClick={doSearch} variant="contained">
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchInputArea;
