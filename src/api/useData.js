import React, { useEffect } from "react";
import { useFetch } from "./useFetch.js";
import { mainUrls } from "./dataRoutes.js";
import { usePhotos } from "./usePhotos.js";

/**
     Fetch data from an open-source API. It returns json containing pagination.
     The json contains an `info` and a `results` property. The `info` contains every information about the pagination,
     the `results` contains the characters objects situated in the given page number in the pagination.
     *
     * @param pageNum integer that gives the pagination page number. The json `info` property contains how many pages are.
     */
export const useCharacters = (pageNum = 1) => {
  const [characters, setUrl] = useFetch(mainUrls.characters + pageNum);
  useEffect(() => {
    setUrl(mainUrls.characters + pageNum);
  }, [pageNum]);
  return characters === undefined ? "Loading..." : characters;
};

/**
     Fetch data from an open-source API. It returns json containing pagination.
     The json contains an `info` and a `results` property. The `info` contains every information about the pagination,
     the `results` contains the locations objects situated in the given page number in the pagination.
     *
     * @param pageNum integer that gives the pagination page number. The json `info` property contains how many pages are.
     */
export const useLocations = (pageNum = 1) => {
  const [locations, setUrl] = useFetch(mainUrls.locations + pageNum);
  useEffect(() => {
    setUrl(mainUrls.locations + pageNum);
  }, [pageNum]);
  return locations === undefined ? "Loading..." : locations;
};

export const usePlanets = () => {
  const [photos, setUrl] = usePhotos(
    "https://api.pexels.com/v1/search/?page=1&per_page=20&query=planet"
  );
  useEffect(() => {
    setUrl("https://api.pexels.com/v1/search/?page=1&per_page=20&query=planet");
  }, []);
  return photos === undefined ? "Loading..." : photos;
};