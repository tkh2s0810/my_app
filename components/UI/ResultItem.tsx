import React, { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import "../../styles/tailwind.css";

interface ResultItemProps {
  result: any;
}

const ResultItem: React.FC<ResultItemProps> = ({ result }) => {
  const apiKey = "AIzaSyDXS2EWjKRtXch_OWCrmCgsK9uoHa6nmdE";
  const photoReference = result.photos?.[0].photo_reference;
  const maxWidth = 200;
  const maxHeight = 100;

  const imageUrl = `https://maps.googleapis.com/maps/api/place/photo?key=${apiKey}&photoreference=${photoReference}&maxwidth=${maxWidth}&maxheight=${maxHeight}`;

  return (
    <>
      <div className="bg-gray-100 border-double w-96">
        <div className="flex flex-wrap">
          <div>
            <p className="w-48">{result.name}</p>
            <p className="w-48">⭐️⭐️⭐️⭐️⭐️</p>
          </div>
          <img src={imageUrl} alt={result.name} />
        </div>
        <p>生ハムが美味しいお店。また行きたい😍</p>
        <div>
          <button>⭐️</button>
          <button>❤️</button>
          <button>⚪︎</button>
        </div>
      </div>
    </>
  );
};

export default ResultItem;
