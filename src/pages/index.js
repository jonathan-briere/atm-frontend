import * as React from "react";

import { Layout } from "../components/Layout";
import { Listing } from "../components/Listing";
import { fetchGeoLocations } from "../action/geoAction";

const IndexPage = () => {
  const [locations, setLocations] = React.useState();

  React.useEffect(() => {
    fetchGeoLocations(setLocations);
  }, []);

  return (
    <Layout>
      <Listing locations={locations} />
    </Layout>
  );
};

export default IndexPage;
