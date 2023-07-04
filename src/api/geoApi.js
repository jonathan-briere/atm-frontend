import axios from "axios";
import { apiUrls } from "../helper/apiUrls";
import baseApi from "./baseApi";

const fetchGeoLocationsApi = () => baseApi.get(apiUrls.locations);

const fetchGeoLocationApi = (id) => baseApi.get(apiUrls.location(id));
