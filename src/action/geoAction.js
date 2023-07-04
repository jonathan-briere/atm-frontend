import { fetchGeoLocationApi, fetchGeoLocationsApi } from "../api/geoApi";

export const fetchGeoLocations = (setValue) =>
  fetchGeoLocationsApi()
    .then((response) => setValue(response.data))
    .catch((err) => console.error(err));

export const fetchGeoLocation = (ip, setValue) =>
  fetchGeoLocationApi(ip)
    .then((response) => setValue([response.data]))
    .catch((err) => console.error(err));
