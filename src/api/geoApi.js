import { apiUrls } from "../helper/apiUrls";
import baseApi from "./baseApi";

export const fetchGeoLocationsApi = () => baseApi.get(apiUrls.locations);

export const fetchGeoLocationApi = (ip) => baseApi.get(apiUrls.location(ip));
