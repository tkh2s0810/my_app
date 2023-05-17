import React from "react";
import { useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { TextField, Button } from "@mui/material";

interface SearchInputProps {
  setSerachData: React.Dispatch<
    React.SetStateAction<AxiosResponse<any, any> | undefined>
  >;
}

const SearchInputArea: React.FC<SearchInputProps> = ({ setSerachData }) => {
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
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  };
  return (
    <>
      <TextField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchInput(e.target.value);
        }}
        id="standard-basic"
        label="Search Word"
        variant="standard"
      />
      <Button onClick={doSearch} variant="contained">
        Search
      </Button>
    </>
  );
};

export default SearchInputArea;
