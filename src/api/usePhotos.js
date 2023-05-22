import React, { useEffect } from "react";
import { useState } from "react";
const imageAPIkey = "563492ad6f91700001000001da364313c2ef41c59f6d759d9e7b34fe";
export const usePhotos = (initUrl) => {
  const [data, setData] = useState(undefined);
  const [url, setUrl] = useState(initUrl);

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: imageAPIkey,
      },
    })
      .then((response) => {
        if (response.status !== 200) return "There must be a problem";
        return response.json();
      })
      .then((json) => setData(json.photos));
  }, [url]);

  return [data, setUrl];
};
