import { fetchGeoLocationApi, fetchGeoLocationsApi } from "../api/geoApi";

export const fetchGeoLocations = () =>
  fetchGeoLocationsApi()
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

export const fetchGeoLocation = (ip) =>
  fetchGeoLocationApi(ip)
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
