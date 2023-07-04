import * as React from "react";
import { fetchGeoLocation, fetchGeoLocations } from "../action/geoAction";

const IndexPage = () => {
  React.useEffect(() => {
    fetchGeoLocations();
  }, []);

  return (
    <div>
      <h1>ATM Frontend</h1>
    </div>
  );
};

export default IndexPage;
